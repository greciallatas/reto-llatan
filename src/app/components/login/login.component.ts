import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  // Variables para alerta
  errorStatus:boolean = false;
  errorMsj:any = '';

  ngOnInit(): void {
    this.reviewToken();
  }

  reviewToken(){
    if (localStorage.getItem('token')) {
      this.router.navigate(['products'])
    }
  }

  onLogin(form: LoginI){
    this.api.loginByUser(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      // Almacenar token en localStorage
      if (dataResponse.status !== 'Error') {
        localStorage.setItem('token', dataResponse.token);
        this.router.navigate(['products'])
      } else {
        this.errorStatus = true;
        this.errorMsj = dataResponse.msg;
      }
    });
  }

}
