import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';



@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  modalRef: BsModalRef | null;
  modalRef1: BsModalRef | null;



  policies = new Array<any>();
  myForm: FormGroup;
  searchCard;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private modalService: BsModalService) {
    this.isLoading();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params["id"] && params["titulo"] != null){
        console.log("LLego con el parametro id y titulo: " + params["id"] + " " + params["titulo"]);
      }

      this.myForm = this.fb.group({
        dataCards: this.fb.array([])
      });

    }); 
  }

  isLoading(){
    this.policies = [
      {id: 0, name: "Goku"},
      {id: 1, name: "Alexis"},
      {id: 2, name: "Vegueta"},
      {id: 3, name: "Julio"},
      {id: 4, name: "Trunks"},
      {id: 5, name: "Goten"}, 
  ];
  }

  onChange(obj: object, isChecked: boolean) {
    const idFormArray = <FormArray>this.myForm.controls.dataCards;

    if (isChecked) {
      idFormArray.push(new FormControl(obj));
    } else {
      let index = idFormArray.controls.findIndex(x => x.value == obj)
      idFormArray.removeAt(index);
    }
  }


  openModal(template: TemplateRef<any>) {
    const initialState = {
      list: ["Hola","Como","Estas"],
      title: 'Titulo del modal cerrar',
      refuseBtnName: 'Close',
      template: template
    };

  

    this.modalRef = this.modalService.show(ModalCompComponent, { initialState });

    this.modalRef.content.refuseEvent.subscribe((value) => {
        console.log(value) // here you will get the value
        alert("El valor: " + value);
        });
  }

  openModal1(template: TemplateRef<any>) {
    const initialState = {
      list: ["Hola","Como","Estas"],
      title: 'Titulo del modal cerrar',
      refuseBtnName: 'Close',
      template: template
    };

    this.modalRef1 = this.modalService.show(ModalCompComponent, { initialState });

    this.modalRef1.content.refuseEvent.subscribe((value) => {
        console.log(value) // here you will get the value
        alert("El: " + value);
        });
  }

}
