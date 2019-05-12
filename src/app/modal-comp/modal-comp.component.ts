import { Component, OnInit, EventEmitter, Output,TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  template: TemplateRef<any>
  modalRef: BsModalRef | null;
  modalRef1: BsModalRef | null;

  title: string;
  closeBtnName: string;
  list: any[] = [];

isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
 
  constructor(public bsModalRef: BsModalRef, private _formBuilder: FormBuilder,private modalService: BsModalService) {
    console.log("Hola Mundo");
  }
 
  ngOnInit() {
    if(this.template.elementRef){
      this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog modal-lg modal-dialog-centered' });
    }
 
    this.list.push('PROFIT!!!');
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


dataName:string;
first(){
  alert("Hola");
  this.dataName ="Alexis";
}

}
