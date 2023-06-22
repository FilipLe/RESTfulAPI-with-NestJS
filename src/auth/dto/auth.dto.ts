import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    // @ 58:00 @ https://www.youtube.com/watch?v=GHTA143_b-s&t=1261s
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}