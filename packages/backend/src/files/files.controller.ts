import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('files')
@Controller('files')
export class FilesController {

    @Get(':imgname')
    seeFile(@Param('imgname') imageName:string, @Res() res){
        res.sendFile(imageName,{root:'uploads'})
    }
}
