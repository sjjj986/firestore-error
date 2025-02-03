import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({ "apiKey": "AIzaSyDt0fyNg3UL_jRULc4aGVUeXwwgA7LdVgg", "authDomain": "vernal-cargo-334202.firebaseapp.com", "projectId": "vernal-cargo-334202", "storageBucket": "vernal-cargo-334202.appspot.com", "messagingSenderId": "262284580058", "appId": "1:262284580058:web:493f4732502cfbd1d2c1e3", "measurementId" : "G-ETW40EDQHF" })), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
