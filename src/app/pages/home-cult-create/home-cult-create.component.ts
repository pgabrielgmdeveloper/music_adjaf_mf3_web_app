import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MusicApiService } from '../../services/music-api.service';
import { CreateCultRequest } from '../../model/cult/cult';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-cult-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './home-cult-create.component.html',
  styleUrl: './home-cult-create.component.scss'
})
export class HomeCultCreateComponent {
  name: string = ""


  constructor(private musicApi: MusicApiService, private router: Router, private toast: ToastrService){

  }

  createCult(){
    if(this.name == "" || this.name == undefined || this.name.length < 5){
      this.toast.info("Verifique todos os campos");

    } else {
      const payload: CreateCultRequest = {
        name: this.name
      };
      this.musicApi.createCult(payload).subscribe({
        next: res => {
          this.toast.success("Culto criado com sucesso !")
          this.router.navigate(["home"])
        },
        error: err => {
          if(err.status == 403) {

            this.toast.error("sessão expirada")
            this.router.navigate(["login"])
          }
          this.toast.error("Entre em contato com o ADM do sistema","Error ao criar culto",)
          this.router.navigate(["home"])
        }
      })
    }
    
  }

}
