import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable({})
export class AuthService{
    async signup(dto: AuthDto){
        // 1. generate the password hash
        const hash = await argon.hash(dto.password);

        // 2. save the new user in list for now
        let userArr: {email: string, hash}[] = [];
        const user = {email: dto.email, hash};
        userArr.push(user);

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
        const fs = require("fs");

        fs.readFile("src/auth/auth.users.json", "utf8", (err, userJSON) => {
            if (err) {
              console.log("File read failed:", err);
              return;
            }
            const userObject = JSON.parse(userJSON);
            console.log(userObject.email);
            return {userObject};
        });

        // 1:12:00
        // 1. find the user by email
        // 2. if user does not exist, throw Exception

        // 3. compare passwords
        // 4. if password incorrect, throw Exception

        // 5. send back the user
        // return {msg: 'I have signed in'};
    }
}