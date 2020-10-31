import { Controller, Get, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('files')
@Controller('files')
export class FilesController {

    @Get(':imgname')
    seeFile(@Param('imgname') imageName:string, @Res() res){
        try{
        res.sendFile(imageName,{root:'uploads/photo'})
        }catch(error){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Not found image',
              }, HttpStatus.NOT_FOUND);
        }
    }
}
