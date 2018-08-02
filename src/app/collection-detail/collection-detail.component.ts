import {Component, Input, OnInit} from '@angular/core';
import {Collection} from '../collection';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CollectionService} from '../collection.service';
import {Photo} from '../photo';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {

  collection: Collection;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCollection();
  }

  getCollection(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.collectionService.getCollection(id)
      .subscribe(collection => {
        this.collection = collection;
        this.collectionService.getPhotos(id)
          .subscribe(photos => {
            this.photos = photos;
            this.photos.forEach(photo => {
              const filePath = `photos/${this.collection.metadata.title}/${photo.filename}`;
              this.collectionService.getPhotoUrl(filePath).subscribe(url => photo.url = url);
              console.log(this.collection);
            });
          });
      });
  }

  goBack(): void {
    this.location.back();
  }

}
