import { Directive, Input, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryOperator]'})
export class QueryOperatorDirective {
  constructor(public template: TemplateRef<any>) {}
}
