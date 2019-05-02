import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent implements OnInit {
  @Output() refuseEvent = new EventEmitter();
  @Output() okEvent = new EventEmitter();
  loading: boolean;
  foods = new Array<Food>();

  title: string;
  closeBtnName: string;
  list: any[] = [];

  isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
 
  constructor(public bsModalRef: BsModalRef, private _formBuilder: FormBuilder) {}
 
  ngOnInit() {
    //this.list.push('PROFIT!!!');
    this.isloadingFood();
    this.isLoadingLinear();
  }


  refuseClick(param){
    this.loading = true;
		this.refuseEvent.emit(param); // here you can send object  instead of true
  }

  okClick(param){
    this.loading = true;
		this.okEvent.emit(param); // here you can send object  instead of true
  }

  selectedValue: string;
isloadingFood(){
  this.foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}



isLoadingLinear(){
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
}

}
