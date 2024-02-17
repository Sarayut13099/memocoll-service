import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth/auth.service';
import { LoginController } from './auth/login/login.controller';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    JwtModule.register({
      secret: 'NMQbXpXKzsb93uKzML3eYpeAYBKBzHNp',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, AuthService],
})
export class AppModule { }
