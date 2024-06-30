import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CreateAccountRequest } from '../../model/auth/auth';
import { Router } from '@angular/router';
import { MusicApiService } from '../../services/music-api.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, MatButton, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formSubmited: boolean = false;
  registerForm: FormGroup;
  passwordNotMacher: boolean = false

  constructor(private fb: FormBuilder, private router: Router, private service: MusicApiService, private toast: ToastrService){
    this.registerForm = fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required],
      phone: ["", Validators.required, this.phoneNumberValidator]
    },)
  }


  phoneNumberValidator(control: FormControl): Observable<ValidationErrors | null> | null {
    return of(control.value).pipe(
      map(phone => {
        if (phone.length !== 11) {
          return { invalidPhoneNumber: true };
        }
        if(isNaN(phone)){
          return { invalidPhoneNumber: true };
        }
        return null;
      })
    )
  }

  toLogin(){
    this.router.navigate(["login"])
  }

  register() {
    this.formSubmited = true
    if(this.registerForm.valid){
      const email = this.registerForm.get("username")!.value
      const password = this.registerForm.get("password")!.value
      const confirmPassword = this.registerForm.get("passwordConfirm")!.value
      const phone = this.registerForm.get("phone")!.value
      if(confirmPassword === password){
        const payload: CreateAccountRequest = {
            username: email,
            password: password,
            number: phone
        }

        this.service.register(payload).subscribe(
          {
            next: res => {
              this.toast.success("Conta criada com sucesso")
              this.toLogin()
            },
            error: err => {
              this.toast.error("Erro ao criar conta")
              this.toLogin()
            }
          }
        )
        
      }
      this.passwordNotMacher = true;
    }
  }

}
