import { Component, OnInit } from '@angular/core';
import {MusipediaService} from "../Models/musipedia.service";
import {PerformedComposition} from "../Models/performed-composition";

@Component({
  selector: 'app-add-performed-composition',
  templateUrl: './add-performed-composition.component.html',
  styleUrls: ['./add-performed-composition.component.css']
})
export class AddPerformedCompositionComponent implements OnInit {
  model: AddPerformedCompositionModelComponent = {
    performerName: '',
    compositionName: ''
  };

  constructor(private musipediaService: MusipediaService) { }

  ngOnInit(): void {
  }

  addPerformedComposition(): void {
    this.musipediaService.createPerformedComposition(this.model).subscribe(
      res => {location.reload(); },
      err => {alert('Всё пошло по...'); }
    );
  }
}

export interface AddPerformedCompositionModelComponent{
  performerName: string;
  compositionName: string;
}
