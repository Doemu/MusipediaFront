import { Component, OnInit } from '@angular/core';
import {Composition} from "../Models/composition";
import {MusipediaService} from "../Models/musipedia.service";
import {Performer} from "../Models/performer";

@Component({
  selector: 'app-performers',
  templateUrl: './performers.component.html',
  styleUrls: ['./performers.component.css']
})
export class PerformersComponent implements OnInit {

  performers: Performer[];

  constructor(private musipediaService: MusipediaService) {}

  ngOnInit(): void {
    this.musipediaService.performers().subscribe(data => {
      this.performers = data;
    });
  }

  updatePerformer(performer: Performer): void {
    this.musipediaService.savePerformer(performer).subscribe(res => {location.reload(); }, err => {alert('holy moly'); });
  }
}
