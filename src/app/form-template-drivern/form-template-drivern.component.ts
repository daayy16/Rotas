import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-drivern',
  templateUrl: './form-template-drivern.component.html',
  styleUrls: ['./form-template-drivern.component.css']
})
export class FormTemplateDrivernComponent implements OnInit {

  curso: any = {
    nome: null,
    id: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Form){
    console.log(Form.value);
  }

}
