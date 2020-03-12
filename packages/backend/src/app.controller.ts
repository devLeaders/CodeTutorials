import { Controller, Get,Param,Query, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test23/:id")
  @UseGuards(AuthGuard('jwt'))
  getHello(@Param('id') id:string, @Query("test1") zbys:number): string {
    return this.appService.getHello();
  }
}
