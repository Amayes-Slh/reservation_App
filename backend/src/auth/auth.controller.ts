import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req: any){
        return this.authService.login(req.user)
    }
}
