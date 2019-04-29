import { Directive, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryArrowIcon]'})
export class QueryArrowIconDirective {
  constructor(public template: TemplateRef<any>) {}
}
