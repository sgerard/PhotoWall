import { Injectable } from '@angular/core';
import {COLLECTIONS} from './mock-collections';
import {Collection} from './collection';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  getCollections(): Observable<Collection[]> {
    return of(COLLECTIONS);
  }

  getCollection(id: number): Observable<Collection> {
    return of(COLLECTIONS.find(collection => collection.id === id));
  }

  constructor() { }
}
