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

  getCollection(id: string): Observable<Collection> {
    return this.firestore.read('photos/' + id);
  }

  constructor(public firestore: AngularFireLiteFirestore) { }
}
