import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import * as fs from 'fs';

@Injectable({})
export class AuthService{
    async signup(dto: AuthDto){
        // 1. generate the password hash
        const hash = await argon.hash(dto.password);

        // 2. save the new user
        const user = {email: dto.email, password: dto.password, hash};

        // adding to Json DB @ 1:04:00
        const file = fs.readFileSync('src/auth/auth.userTest.json')
        
        // if json empty
        if (file.length == 0) {
            // create empty array[] and add user object to it
            fs.writeFileSync("src/auth/auth.userTest.json", JSON.stringify([user]))
        
        } else {
            // simply add object to existing []
            const json = JSON.parse(file.toString())
            json.push(user);
            fs.writeFileSync("src/auth/auth.userTest.json", JSON.stringify(json))
        }

        // 3. return the saved user
        return user;
    }
 

    async signin(dto: AuthDto){
        
        try {
            // reading json file
            const jsonString = fs.readFileSync('src/auth/auth.userTest.json', 'utf-8');
            const userObject = JSON.parse(jsonString);

            // 1:14:00 - 1:16:00 
            
            let i = 0;
            let found: boolean = false;
            // 1. find the user by email 
            for(i = 0; i < userObject.length; i++){               
                // if user exists
                if(userObject[i].email === dto.email){
                    found = true;

                    // 2. compare passwords
                    let user = userObject[i];
                    const passwordMatches = await argon.verify(user.hash, dto.password);

                    // 3. if password incorrect, throw Exception   
                    if (!passwordMatches){
                        throw new ForbiddenException('Credentials incorrect. Passcode is incorrect.');
                    }

                    // 4. otherwise, user login successful
                    else{
                        console.log("Login Successful.");
                        console.log("Welcome back, " + user.email + "!");
                    }
                }
            }
            // 5. if we reached end of loop --> user does not exist, throw Exception
            if(found == false && i == userObject.length){
                throw new ForbiddenException('Credentials incorrect. User not found.');
            }

            // 6. send back the user
            return userObject;
        } 
        
        
        catch (err) {
            console.error(err);
            return;
        }
    }
}