import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private authservice: AuthService, private storage: AngularFireStorage) { }

  private upload(event) {
    console.log(event.target);
    const file = event.target.files[0].name;
    const filePath = `profile/${file}`; //las comitas diagonales son las unicas que permiten usar variables
    const path = this.storage.ref(filePath);
    const tarea = this.storage.upload(filePath, file);

  }
  ngOnInit() {
  }

}
