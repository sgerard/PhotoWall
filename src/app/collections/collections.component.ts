import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection';

import {CollectionService} from '../collection.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[];

  constructor(private collectionService: CollectionService) { }

  getCollections(): void {
    this.collectionService.getCollections()
      .subscribe(collections => {
        console.log(collections);
        this.collections = collections;
      });
  }

  ngOnInit() {
    this.getCollections();
  }

}
