import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    // Dependency Injection @ 17:08 @ https://www.youtube.com/watch?v=GHTA143_b-s
    constructor(private authService: AuthService){}

    @Post('signup')
    // Post Sign Up e-mail @ 47:26 @ https://www.youtube.com/watch?v=GHTA143_b-s&t=1261s
    signup(
        @Body('email') email: string, 
        @Body('password') password: string
    ){
        console.log({
            email,
            typeOfEmail: typeof email,
            password,
            typeOfPassword: typeof password
        });
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}