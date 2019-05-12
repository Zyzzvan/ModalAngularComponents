import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-componente-exp',
  templateUrl: './componente-exp.component.html',
  styleUrls: ['./componente-exp.component.css']
})
export class ComponenteExpComponent implements OnInit {

  constructor(private modalService: BsModalService) {
  }
 
  ngOnInit() {
  }
  
}


