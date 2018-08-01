import { Injectable } from '@angular/core';
import {Collection} from './collection';
import {Observable, of} from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { AngularFireLiteFirestore } from 'angularfire-lite';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  getCollections(): Observable<Collection[]> {
    return this.firestore.read('photos');
  }

  getCollection(id: number): Observable<Collection> {
    return this.firestore.query('galleries').where('id', '==', id).limit(1).on().map(a => a[0]);
  }

  constructor(public firestore: AngularFireLiteFirestore) { }
}
