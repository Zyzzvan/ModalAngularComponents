import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from '../api.service';
import {FormArray, FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
  providers: [ApiService]
})
export class Componente1Component implements OnInit {
  bsModalRef: BsModalRef;
  modalRef: BsModalRef;
  myForm: FormGroup;
  inputAtt: any[] = [];
  inputAttRes: any[] = [];

  @ViewChild('inlinePdfViewer') public inlinePdfViewer;


  constructor(private modalService: BsModalService,) {
  }
  currentTab:number; // Current tab is set to be the first tab (0)

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.isLoading();
    this.inputAtt = [];
    this.currentTab = 0; //
    this.modalRef = this.modalService.show(template,{class: 'modal-dialog modal-lg modal-dialog-centered'});
    this.showTab(this.currentTab); // Display the current tab  

  }
 
   showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n]['style'].display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    this.fixStepIndicator(n)
  }
  
   nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !this.validateForm()) return false;
    // Hide the current tab:
    x[this.currentTab]['style'].display = "none";
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form...
    if (this.currentTab >= x.length) {
      // ... the form gets submitted:
      document.getElementById("regForm").click();
      return false;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  }
  
   validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[this.currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "" || this.inputAtt['valor'] == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[this.currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
   fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }

  dataDoc = new Array<any>();

  isLoading(){
    this.dataDoc = [
      {
          idOrder: 1,
          nomDocumento: "Acta Constitutiva",	
          claseDocumental: "Documento Legal",
          atributos: [
            {
              name: "rfc",
              nombre: "RFC",
              idOrderAtt: 1,
              tipoDato: "string",
              requerido: true,
              visible: true,
              valor: "",
              readonly: false
            },
            {
              name: "tipoDocumentoLegal",
              nombre: "Tipo Documento Legal",
              idOrderAtt: 2,
              tipoDato: "string",
              requerido: true,
              visible: false,
              valor: "Acta Constitutiva",
              readonly: false
            },
            {
              name: "regionCaptura",
              nombre: "Region Captura",
              idOrderAtt: 3,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "Rock",
              readonly: true
            }
          ]   
      },
      {
          idOrder: 2,
          name: "cedulaFiscal",
          nomDocumento: "Cedula Fiscal",	
          claseDocumental: "Documento Legal",
          atributos: [
            {
              name: "rfc",
              nombre: "RFC",
              idOrderAtt: 1,
              tipoDato: "string",
              requerido: true,
              visible: true,
              valor: "Alex",
              readonly: true
            },
            {
              name: "tipoDocumentoLegal",
              nombre: "Tipo Documento Legal",
              idOrderAtt: 2,
              tipoDato: "string",
              requerido: true,
              visible: false,
              valor: "Cedula RFC",
              readonly: false
            },          
            {
              name: "regionCaptura",
              nombre: "Region Captura",
              idOrderAtt: 3,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "Van",
              readonly: true
            }
          ]
      },
      {
          idOrder: 3,
          name: "alexisivan",
          nomDocumento: "Alexis Ivan",	
          claseDocumental: "Documento Legal",
          atributos: [
            {
              name: "rfc",
              nombre: "RFC",
              idOrderAtt: 1,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "",
              readonly: false
            },
            {
              name: "tipoDocumentoLegal",
              nombre: "Tipo Documento Legal",
              idOrderAtt: 2,
              tipoDato: "string",
              requerido: true,
              visible: true,
              valor: "",
              readonly: false
            },          
            {
              name: "regionCaptura",
              nombre: "Region Captura",
              idOrderAtt: 3,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "",
              readonly: false
            },
            {
              name: "rfc",
              nombre: "RFC",
              idOrderAtt: 1,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "",
              readonly: false
            },
            {
              name: "tipoDocumentoLegal",
              nombre: "Tipo Documento Legal",
              idOrderAtt: 2,
              tipoDato: "string",
              requerido: true,
              visible: true,
              valor: "",
              readonly: false
            },          
            {
              name: "regionCaptura",
              nombre: "Region Captura",
              idOrderAtt: 3,
              tipoDato: "string",
              requerido: false,
              visible: true,
              valor: "",
              readonly: false
            }
          ]
      }
    ];

  }

  generalInput = new Array<any>();


    //Pasar parametros 
    onChange(obj: object, isChecked: boolean) {
      //this.modalRef2 = this.modalService.show(template, { class: 'second' });
      console.log("Selección att: "+obj['atributos']);
      //Limpiar la informacion del array antes de que se llene
      this.inputAtt = [];
      this.inputAttRes = [];
      this.generalInput = [];
      this.generalInput = obj['atributos'];
       this.generalInput.forEach(element => {
        if(element.visible != true){
          //Ignora y no lo pintes y haz algo mas que necesite hacer con la variable valor
          element.valor = "Alexis";
          this.inputAttRes.push(element.valor);
        }
        else{
          //Solo agrega los input que vas a mostrar
          this.inputAtt.push(element);
        }
     });
    }


    loadData(param){
      // Exit the function if any field in the current tab is invalid:
      for (let index = 0; index < this.generalInput.length; index++) {
        if (this.generalInput[index].valor == "") {
          this.generalInput[index].valor = param.value[this.generalInput[index].name];
        }
      }
      if(param.value != null){
        this.inputAttRes.push(param.value);
        console.log(param.value);
      }else{
        alert("No has cargado nada")
      }
    }


    public loadAndDisplayPdf() {
      this.inlinePdfViewer.pdfSrc = "gre_research_validity_data.pdf";
      this.inlinePdfViewer.refresh();   
    }
}
