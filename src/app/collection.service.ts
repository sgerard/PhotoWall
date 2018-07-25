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

  constructor() { }
}
