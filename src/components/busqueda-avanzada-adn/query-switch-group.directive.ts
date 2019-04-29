import { Directive, TemplateRef } from './node_modules/@angular/core';

@Directive({ selector: '[querySwitchGroup]' })
export class QuerySwitchGroupDirective {
  constructor(public template: TemplateRef<any>) { }
}
