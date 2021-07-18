import { Component, OnInit } from '@angular/core';
import {Composition} from '../Models/composition';
import {MusipediaService} from '../Models/musipedia.service';
import {PerformedComposition} from '../Models/performed-composition';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  performedCompositions: PerformedComposition[];

  constructor(private musipediaService: MusipediaService) {}

  ngOnInit(): void {
    this.musipediaService.list().subscribe(data => {
      this.performedCompositions = data;
    });
  }

  deletePerformedComposition(performedComposition: PerformedComposition): void {
    if (confirm('Delete Entity?')) {
      this.musipediaService.deletePerformedComposition(performedComposition.id).subscribe(
        res => {
          const index = this.performedCompositions.indexOf(performedComposition);
          this.performedCompositions.splice(index, 1);
          location.reload(); },
        err => {alert('ErRoR'); }
      );
    }
  }
}
