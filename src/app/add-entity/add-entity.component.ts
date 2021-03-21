import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {
  type = 'Composition';
  model: AddEntityModelComponent = {
    name: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  addEntity(): void{
    let url;
    if (this.type === 'Composition') {
      ;url = 'http://localhost:8080/addComposition'
    }
    else{
      url = 'http://localhost:8080/addPerformer';
    }
    this.http.post(url, this.model).subscribe(
      res => {location.reload(); },
      err => {alert('Error'); }
  );
  }

  /*constructor() { }

  ngOnInit(): void {
  }*/

}

export interface AddEntityModelComponent{
  name: string;
}
export interface PerformerViewModel{
  name: string;
}

