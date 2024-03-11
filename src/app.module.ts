import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth/auth.service';
import { LoginController } from './auth/login/login.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    JwtModule.register({
      secret: 'NMQbXpXKzsb93uKzML3eYpeAYBKBzHNp',
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: 'memocoll'
    })
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, AuthService],
})

export class AppModule { }
