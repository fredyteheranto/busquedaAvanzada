import { Directive, TemplateRef } from './node_modules/@angular/core';

@Directive({selector: '[queryEmptyWarning]'})
export class QueryEmptyWarningDirective {
  constructor(public template: TemplateRef<any>) {}
}
