//todo lo relacionado con users
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'; //import de mapeo
import { auth } from 'firebase/app';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
import { userInfo } from 'os';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private asfAuth: AngularFireAuth, private router: Router) { }

  registerUser(email:string, pwd:string) {
    return new Promise((resolve, reject) =>
    {
      
      this.asfAuth.auth.createUserWithEmailAndPassword(email, pwd)
      .then(userData => resolve(userData), err => reject(err.message));
    });
   }

  

  loginEmailUser(email:string, pass:string) {
    return new Promise((resolve, reject) =>
    {
      this.asfAuth.auth.signInWithEmailAndPassword(email,pass)
        .then(userData => resolve(userData), err => reject(err));
        
    });
   }

  loginFacebookUser() {
    this.asfAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    this.redirect();
  }
  loginGoogleUser() {
    this.asfAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.redirect();
  }
  logoutUser() {
    this.asfAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  /**
   * Metodo para saber quien ingresa
   * PIPE mapea que usuario ingresa
   */
  isAuth() {
    return this.asfAuth.authState.pipe(map(auth => auth));
  }

  redirect()
  {
    this.router.navigate(['/profile']);
  }
}
