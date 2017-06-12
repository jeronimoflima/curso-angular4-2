import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroAarayImpuro',
  pure: false
})
export class FiltroAarayImpuroPipe extends FiltroArrayPipe {

  transform(value: any, args?: any): any {
    return null;
  }

}
