import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  policies = new Array<any>();
  myForm: FormGroup;
  searchCard;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
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

}
