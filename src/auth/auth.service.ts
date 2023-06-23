import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import * as fs from 'fs';

@Injectable({})
export class AuthService{
    async signup(dto: AuthDto){
        // 1. generate the password hash
        const hash = await argon.hash(dto.password);

        // 2. save the new user in list for now
        // let userArr: {email: string, hash}[] = [];
        const user = {email: dto.email, hash};
        // userArr.push(user);



        // ADDING TO JSON
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

        /* 
        LATER
        save the new user in the db
        @ 1:04:00, we will do DB later
        */

        // 3. return the saved user
        return user;
    }

    async signin(){
        // reading json file
        try {
            const jsonString = fs.readFileSync('src/auth/auth.users.json', 'utf-8');
            const userObject = JSON.parse(jsonString);
            console.log(userObject);
            console.log(userObject.users[0].email);
            return userObject;
        } catch (err) {
            console.error(err);
            return;
        }

        // 1:12:00 
        // 1. find the user by email
        // 2. if user does not exist, throw Exception

        // 3. compare passwords
        // 4. if password incorrect, throw Exception

        // 5. send back the user
        // return {msg: 'I have signed in'};
    }
}