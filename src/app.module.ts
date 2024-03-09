import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth/auth.service';
import { LoginController } from './auth/login/login.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    JwtModule.register({
      secret: 'NMQbXpXKzsb93uKzML3eYpeAYBKBzHNp',
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
    MongooseModule.forRoot('mongodb://touch:secret@localhost:27017', {
      dbName: 'memocoll'
    })
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, AuthService],
})
export class AppModule { }
