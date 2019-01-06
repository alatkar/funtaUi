import { Component, OnInit } from '@angular/core';
import { IForms, InputType } from '@app/shared/form/IForm';

@Component({
  selector: 'funta-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public rows: Array<IForms> = [];
  constructor() {
    this.rows = [
      {
        name: 'nameOfDgosText',
        title: 'petsText',
        type: InputType.text,
        placeHolder: 'testtt',
        icon: 'glyphicon glyphicon-user'
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
        icon: 'glyphicon glyphicon-envelope'
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
        placeHolder: 'testtt'
      },
      {
        name: 'nameOfDgospassword',
        title: 'petspassword',
        type: InputType.password,
        placeHolder: 'testtt'
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

  ngOnInit() {
  }

}
