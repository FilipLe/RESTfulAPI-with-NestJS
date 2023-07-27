import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    // Dependency Injection
    constructor(private authService: AuthService){}

    @Post('signup')
    // Post Sign Up e-mail
    signup(@Body() dto: AuthDto){
        console.log(dto);
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
}