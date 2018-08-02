import { Injectable } from '@angular/core';
import {Collection} from './collection';
import {Photo} from './photo';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { AngularFireLiteFirestore, AngularFireLiteStorage } from 'angularfire-lite';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  getCollections(): Observable<Collection[]> {
    return this.firestore.read('photos');
  }

  getCollection(id: string): Observable<Collection> {
    return this.firestore.read('photos/' + id);
  }

  getPhotos(id: string): Observable<Photo[]> {
    return this.firestore.read('photos/' + id + '/photos');
  }

  getPhotoUrl(filePath: string): Observable<any> {
    console.log('filepath', filePath);
    return this.storage.download(filePath);
  }

  constructor(public firestore: AngularFireLiteFirestore, public storage: AngularFireLiteStorage) { }
}
