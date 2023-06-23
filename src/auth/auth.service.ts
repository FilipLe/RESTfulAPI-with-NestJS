import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService{
    signup(dto: AuthDto){
        return {msg: 'I have signed up'};
    }

    signin(){
        return {msg: 'I have signed in'};
    }
}