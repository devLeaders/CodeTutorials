import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class FilterVideosDtoMaping implements PipeTransform<any> {
    async transform(value:any) {
        if(!value.category){
            return value
        }
        const arrayValue = value.category.split(',');
        for(let i = 0; i < arrayValue.length; i++){
           if( !Number.isInteger(parseInt(arrayValue[i]))){
             throw new BadRequestException('Validation failed');
           }
        }
        if(!arrayValue) {
            throw new BadRequestException('Validation failed');
        }
        const tempValue = value;
        tempValue.category = arrayValue;
        return tempValue ;
    }
}