import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  private checkinCollection: any;

  constructor(private afs: Firestore) { }


  getCollection(collectionName: string) {
    try {
      const checkinCollection = collection(this.afs, collectionName);
      return collectionData(checkinCollection, { idField: 'id' });
    } catch (error) {
      console.error(`Error fetching collection ${collectionName}:`, error);
      throw error;
    }
  }
}
