import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-componente0',
  templateUrl: './componente0.component.html',
  styleUrls: ['./componente0.component.css'],
  providers: [ApiService]

})
export class Componente0Component implements OnInit {

  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService, private apiService: ApiService) { }
  beers: Array<any>;

  ngOnInit() {
  }

  openModalWithComponent() {
    var res = this.apiService.getAll().subscribe(
      data => {
        const initialState = {
          list: [data[0].id,data[0].name],
          title: 'Titulo del modal',
          refuseBtnName: 'Cancelar',
          okBtnName:'Ok'
        };
    
        this.bsModalRef = this.modalService.show(ModalCompComponent, { initialState });
    
        this.bsModalRef.content.okEvent.subscribe((value) => {
          console.log(value) // here you will get the value
          alert("El valor: " + value);
          });
        this.bsModalRef.content.refuseEvent.subscribe((value) => {
            console.log(value) // here you will get the value
            alert("El valor: " + value);
            });
      },
      error => console.log(error)
    );
  }
}
