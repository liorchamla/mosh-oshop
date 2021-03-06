import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(data => console.log(data));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
