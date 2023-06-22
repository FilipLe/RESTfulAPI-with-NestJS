import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    // Dependency Injection @ 17:08 @ https://www.youtube.com/watch?v=GHTA143_b-s
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(){
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}