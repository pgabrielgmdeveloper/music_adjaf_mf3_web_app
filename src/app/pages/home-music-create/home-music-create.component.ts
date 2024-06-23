import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateMusic } from '../../model/music/music';
import { MusicApiService } from '../../services/music-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-music-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './home-music-create.component.html',
  styleUrl: './home-music-create.component.scss'
})
export class HomeMusicCreateComponent {
  musicForm: FormGroup;

  constructor(private fb: FormBuilder, private musicService: MusicApiService, private router: Router, private toast: ToastrService) {
    this.musicForm = fb.group(
      {
        name: ['', [Validators.required]],
        singer: ['',[Validators.required]],
        music: [null, Validators.required],
        letter: [""],
      }
    )
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0] as File;
    this.musicForm.patchValue(
     {
      music: selectedFile
     }
    );
  }

  submitForm() {
    const payload : CreateMusic = {
      name: this.musicForm.get('name')!.value ,
      singer: this.musicForm.get('singer')!.value,
      letter: this.musicForm.get('letter')!.value,
      music: this.musicForm.get('music')!.value
    }
    this.musicService.createMusic(payload).subscribe(
      {
        next: _ => {
          this.toast.success("Musica Criada com sucesso");

          this.router.navigate(["home/music"]);
        },
        error: _ => {
          this.toast.error("Musica criada com sucesso", "Entre em contato com o ADM do sistema");

            this.router.navigate(["home/music"]);
        }
      }
    )
      
  }

}
