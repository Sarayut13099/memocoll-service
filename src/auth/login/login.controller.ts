import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';

class LoginDto {
  username: string;
  password: string;
}

@ApiTags('Auth')
@Controller('auth')
export class LoginController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiBody({
    description: 'Request username password for login',
    type: LoginDto,
    examples: {
      example1: {
        value: { username: 'user', password: 'password' },
        summary: 'Example user login payload',
      }
    },
  })
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}
