import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { IForms, InputType } from './IForm';

@Component({
  selector: 'funta-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('text', { read: TemplateRef }) text: TemplateRef<any>;
  @ViewChild('number', { read: TemplateRef }) number: TemplateRef<any>;
  @ViewChild('checkbox', { read: TemplateRef }) checkbox: TemplateRef<any>;
  @ViewChild('password', { read: TemplateRef }) password: TemplateRef<any>;
  @ViewChild('file', { read: TemplateRef }) file: TemplateRef<any>;
  @ViewChild('email', { read: TemplateRef }) email: TemplateRef<any>;
  @ViewChild('textarea', { read: TemplateRef }) textarea: TemplateRef<any>;
  @ViewChild('radio', { read: TemplateRef }) radio: TemplateRef<any>;

  @Input() public rows: Array<IForms> = [];
  @Input('Title') public titleForm: string;
  constructor() {
  }

  ngOnInit() {
  }
  public trackByFn(index, item) {
    return index; // or item.id
  }

  public SelectTemplate(row: IForms): TemplateRef<any> {
    return this[InputType[row.type]];
  }
}
