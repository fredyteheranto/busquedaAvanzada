import { Directive, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryRemoveButton]'})
export class QueryRemoveButtonDirective {
  constructor(public template: TemplateRef<any>) {}
}
