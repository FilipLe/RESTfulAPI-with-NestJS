import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable({})
export class AuthService{
    async signup(dto: AuthDto){
        // generate the password hash
        const hash = await argon.hash(dto.password);

        // save the new user in list for now
        let userArr: {email: string, hash}[] = [];
        const user = {email: dto.email, hash};
        userArr.push(user);
        
        /* 
        LATER
        save the new user in the db
        @ 1:04:00, we will do DB later
        */

        // return the saved user
        return user;

        return {msg: 'I have signed up'};
    }

    signin(){
        return {msg: 'I have signed in'};
    }
}