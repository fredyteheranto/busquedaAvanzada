import { Directive, Input, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryField]'})
export class QueryFieldDirective {
  constructor(public template: TemplateRef<any>) {}
}
