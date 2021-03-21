import { Component, OnInit } from '@angular/core';
import {Composition} from '../Models/composition';
import {MusipediaService} from '../Models/musipedia.service';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})
export class CompositionsComponent implements OnInit {

  compositions: Composition[];

  constructor(private musipediaService: MusipediaService) {}

  ngOnInit(): void {
    this.musipediaService.compositions().subscribe(data => {
      this.compositions = data;
    });
  }


  updateComposition(composition: Composition): void {
    this.musipediaService.saveComposition(composition).subscribe(res => {location.reload(); }, err => {alert('holy moly'); });
  }

  deleteComposition(composition: Composition): void {
    if (confirm('Delete Entity?')) {
      this.musipediaService.deleteComposition(composition.id).subscribe(
        res => {
          const index = this.compositions.indexOf(composition);
          this.compositions.splice(index, 1);
          location.reload(); },
        err => {alert('ErRoR'); }
      );
    }
  }
}
