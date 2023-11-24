import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, gvalue: string): string {
    console.log('valuse', value);
    console.log('gvalue', gvalue);
    let resultitle;
    if (gvalue === 'female') {
      resultitle = 'Miss';
    } else {
      resultitle = 'Mr';
    }
    let returnResult = resultitle + " " + value;
    return returnResult;
  }

}
