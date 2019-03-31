import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent implements OnInit {
  @Output() refuseEvent = new EventEmitter();
  @Output() okEvent = new EventEmitter();
  loading: boolean;

  title: string;
  closeBtnName: string;
  list: any[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    //this.list.push('PROFIT!!!');
  }


  refuseClick(param){
    this.loading = true;
		this.refuseEvent.emit(param); // here you can send object  instead of true
  }

  okClick(param){
    this.loading = true;
		this.okEvent.emit(param); // here you can send object  instead of true
  }

}
