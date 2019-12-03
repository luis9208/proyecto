import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
 
  constructor(private autService: AuthService) { 
    
  }

 


  ngOnInit() {
  }

}
