import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  private islogged: boolean;
  private nameUser:String;

  private getCurrentUser() {
    //el metodo isAuth viene del service
    this.autService.isAuth().subscribe(auth => {
      if (auth) {
        this.islogged = true;
        this.nameUser=auth.displayName;
      }
      else {
        this.islogged = false;
        this.nameUser = 'Login';
      }
    });
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private autService: AuthService) {
    //inicializar metodo getcurrentUser
    this.getCurrentUser();
  }

}
