import { Controller, Get,Param,Query} from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test/:id")
  getHello(@Param('id') id:string, @Query("test1") zbys:number): string {
    return this.appService.getHello();
  }
}
