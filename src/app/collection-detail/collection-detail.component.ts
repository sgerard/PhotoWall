import {Component, Input, OnInit} from '@angular/core';
import {Collection} from '../collection';
import {ActivatedRoute} from '@angular/router';
import {CollectionService} from '../collection.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  @Input() collection: Collection;

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCollection();
  }

  getCollection(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.collectionService.getCollection(id)
      .subscribe(collection => this.collection = collection);
  }

}
