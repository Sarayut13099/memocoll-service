import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async validateUser(username: string, password: string): Promise<any> {
    // Here you would validate the user's credentials. This is just a mock example.
    const mockUsername = 'user';
    const mockPassword = await bcrypt.hash('password', 10); // Hash the password before storing it.
    if (username === mockUsername && await bcrypt.compare(password, mockPassword)) {
      return { username: mockUsername };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
