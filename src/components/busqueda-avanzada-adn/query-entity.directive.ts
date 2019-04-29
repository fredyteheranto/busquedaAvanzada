import { Directive, Input, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryEntity]'})
export class QueryEntityDirective {
  constructor(public template: TemplateRef<any>) {}
}
