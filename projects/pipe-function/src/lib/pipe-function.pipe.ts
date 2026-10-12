import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeFunction'
})
export class NgxFunctionPipe implements PipeTransform {
  public transform<T = any>(value: any, handler: (value: any) => T, context?: any): T {
    if (context) {
      return handler.call(context, value);
    }
    return handler(value);
  }
}
