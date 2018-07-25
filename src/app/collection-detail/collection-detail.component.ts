import {Component, Input, OnInit} from '@angular/core';
import {Collection} from '../collection';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  @Input() collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
