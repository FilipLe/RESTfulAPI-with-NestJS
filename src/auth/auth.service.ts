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
            
            // 1. find the user by email 
            // 2. if user does not exist, throw Exception
            for(let i = 0; i < userObject.length; i++){
                if(JSON.stringify(userObject[i].email) !== JSON.stringify(dto.email)){
                    throw new ForbiddenException('Credentials incorrect');
                }

                // if user does exist   
                else{
                    // 3. compare passwords
                    let user = userObject[i];
                    const passwordMatches = await argon.verify(user.hash, dto.password);

                    // 4. if password incorrect, throw Exception   
                    if (!passwordMatches){
                        throw new ForbiddenException('Credentials incorrect');
                    }
                }
            }

            // 5. send back the user
            return userObject;
        } 
        
        
        catch (err) {
            console.error(err);
            return;
        }

        
    }
}