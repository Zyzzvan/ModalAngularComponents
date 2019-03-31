import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
  providers: [ApiService]
})
export class Componente1Component implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private apiService: ApiService) { }

  ngOnInit() {
  }


  openModalWithComponent() {
    var res = this.apiService.getAll().subscribe(
      data => {
        const initialState = {
          list: [data[1].id,data[1].name],
          title: 'Titulo del modal cerrar',
          refuseBtnName: 'Cerrar',
        };
    
        this.bsModalRef = this.modalService.show(ModalCompComponent, { initialState });
    
        this.bsModalRef.content.refuseEvent.subscribe((value) => {
            console.log(value) // here you will get the value
            alert("El valor: " + value);
            });
      },
      error => console.log(error)
    );
  }

}
