import { Pipe, PipeTransform } from '@angular/core';
import { englishToHebrew } from './translation';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    // Check if the translation exists, otherwise return the original value
    return englishToHebrew[value] || value;
  }

}
