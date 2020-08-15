import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'concatFields'})
export class ConcatPipe implements PipeTransform {
    transform( value: any, ...fields: string[] ): string {
        const res = [];

        fields.forEach(field => {
            if( value[field] != undefined ){
                res.push(`${field.toUpperCase()}: ${value[field]}`);
            }
        })
        return res.join(", ");
    }
}