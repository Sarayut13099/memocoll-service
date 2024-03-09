import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiBody({
    type: CreateUserDto,
    examples: {
      example: {
        value: {
          username: 'user',
          first_name: 'firstname',
          last_name: 'lastname',
          gender: 'mail',
          email: 'example@email.com',
          password: 'password'
        },
      }
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateUserDto,
    examples: {
      example: {
        value: {
          username: 'user',
          first_name: 'firstname',
          last_name: 'lastname',
          gender: 'mail',
          email: 'example@email.com',
          password: 'password'
        },
      }
    },
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
