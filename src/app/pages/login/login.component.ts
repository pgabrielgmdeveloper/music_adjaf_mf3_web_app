import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginRequest } from '../../model/auth/auth';
import { MusicApiService } from '../../services/music-api.service';
import { AuthTokenService } from '../../services/auth-token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  formLogin: FormGroup
  formSubmited = false



  constructor(private formBuilder: FormBuilder, 
      private auth: MusicApiService,
      private token: AuthTokenService,
      private toastr: ToastrService,
      private router: Router,
    ){
    this.formLogin = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login(){
    this.formSubmited = true;
    if(this.formLogin.valid){
      const payload = {
        email: this.formLogin.get("username")!.value,
        password: this.formLogin.get("password")!.value,
      } as LoginRequest;

      this.auth.login(payload).subscribe(
        {
          next: res => {
            this.token.setToken = res;
            this.toastr.success("Login efetuado com sucesso")
            this.router.navigate(["home"])
            this.token.setUserLoggedSubject(true);
          },
          error: err => {
            this.toastr.error("email ou senha incorretos !")
          }
        }
      )

    }

  }
  toRegister(){
    this.router.navigate(["register"])
  }

}
