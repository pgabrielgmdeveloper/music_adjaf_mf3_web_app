import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MusicApiService } from '../../services/music-api.service';
import { CreateCultRequest } from '../../model/cult/cult';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cult-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './home-cult-create.component.html',
  styleUrl: './home-cult-create.component.scss'
})
export class HomeCultCreateComponent {
  name: string = ""


  constructor(private musicApi: MusicApiService, private router: Router){

  }

  createCult(){
    if(this.name == "" || this.name == undefined || this.name.length < 5){
      alert("Preencha os campos de forma correta")
    } else {
      const payload: CreateCultRequest = {
        name: this.name
      };
      this.musicApi.createCult(payload).subscribe({
        next: res => {
          alert("Culto criado com sucesso !");
        },
        error: err => {
          alert("Error ao criar culto");
        }
      })
      this.router.navigate(["home"])
    }
    
  }

}
