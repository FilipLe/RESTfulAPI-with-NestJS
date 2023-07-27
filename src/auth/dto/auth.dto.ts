import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    // Initializing DTO + decorators
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}