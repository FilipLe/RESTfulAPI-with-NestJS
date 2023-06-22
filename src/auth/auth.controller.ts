import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    // Dependency Injection @ 17:08 @ https://www.youtube.com/watch?v=GHTA143_b-s
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Req() req: Request){
        console.log(req.body);
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}