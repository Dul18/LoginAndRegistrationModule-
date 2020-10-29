import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginAndRegistrationModule';
  log_email:string;
  log_password:string;
  reg_email:string;
  reg_password:string;
  reg_confirm_password:string;
  register(){


  }

  login(){

    /*if(this.log_email=="admin" && this.log_password=="admin"){
      Sucees
    }
    else{


    }
*/
  }
}
