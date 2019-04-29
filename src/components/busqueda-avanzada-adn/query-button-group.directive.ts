import { Directive, ElementRef, Input, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryButtonGroup]'})
export class QueryButtonGroupDirective {
  constructor(public template: TemplateRef<any>) {}
}
