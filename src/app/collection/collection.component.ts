import {Component, Input, OnInit} from '@angular/core';
import {Collection} from '../collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  @Input() collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
