import { Component, OnInit } from '@angular/core';
import { InputType, IForms } from '@app/shared/form/IForm';

@Component({
  selector: 'funta-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.scss']
})
export class NgoComponent implements OnInit {
  public rows: Array<IForms> = [];

  constructor() { }

  ngOnInit() {
    this.rows = [
      {
        name: 'nameOfDgosText',
        title: 'petsText',
        type: InputType.text,
        placeHolder: 'testtt',
        icon: 'lnr lnr-user'
      },
      {
        name: 'nameOfDgoscheckbox',
        title: 'petscheckbox',
        type: InputType.checkbox,
        placeHolder: 'testtt'
      },
      {
        name: 'nameOfDgosemail',
        title: 'petsemail',
        type: InputType.email,
        placeHolder: 'testtt',
        icon: 'lnr lnr-envelope'
      },
      {
        name: 'nameOfDgosfile',
        title: 'petsfile',
        type: InputType.file,
        placeHolder: 'testtt'
      },
      {
        name: 'nameOfDgosnumber',
        title: 'petsnumber',
        type: InputType.number,
        placeHolder: 'testtt',
        icon: 'lnr lnr-envelope'
      },
      {
        name: 'nameOfDgospassword',
        title: 'petspassword',
        type: InputType.password,
        placeHolder: 'testtt',
        icon: 'lnr lnr-phone-handset'
      },
      {
        name: 'nameOfDgosradio',
        title: 'petsradio',
        type: InputType.radio,
        placeHolder: 'raioooooooooooo'
      },
      {
        name: 'nameOfDgosradio',
        title: 'textarea',
        type: InputType.textarea,
        placeHolder: 'textarea'
      }
    ];
  }

}
