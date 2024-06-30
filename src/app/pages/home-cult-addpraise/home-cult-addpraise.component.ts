import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Group } from '../../model/group/group';
import { Router } from '@angular/router';
import { MusicApiService } from '../../services/music-api.service';
import { TransferInfoCultService } from '../../services/transfer-info-cult.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { Music } from '../../model/music/music';
import { AddPraise } from '../../model/cult/cult';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-cult-addpraise',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule,CommonModule, MatAutocompleteModule],
  templateUrl: './home-cult-addpraise.component.html',
  styleUrl: './home-cult-addpraise.component.scss'
})
export class HomeCultAddpraiseComponent implements OnInit {
  
  groups: Array<Group> = [];
  musics: Array<Music> = [];
  options: Array<Music> = [];
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  addPraiseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private musicApi: MusicApiService, 
    private cultInfosService: TransferInfoCultService,
    private toast : ToastrService
  ){
    this.addPraiseForm = formBuilder.group({
        group: ['', Validators.required],
        music: ['', Validators.required]
    });

  }

  

  ngOnInit(): void {
    this.musicApi.getGroups.subscribe({
      next: res => {
        this.groups = res;
        
      },
      error: err => {
        if(err.status == 403) {

          this.toast.error("sessão expirada")
          this.router.navigate(["login"])
        }
        this.toast.error("Entre em contato com o ADM do sistema", "Error ao buscar grupos", )

      }
    })

    this.musicApi.getMusics().subscribe({
      next: res => {
        this.options = res;
        this.musics = this.options.slice();
      },
      error: err => {
        if(err.status == 403) {

          this.toast.error("sessão expirada")
          this.router.navigate(["login"])
        }
        this.toast.error("Entre em contato com o ADM do sistema", "Error ao buscar musicas",)
      }
    })
  }

  filter() {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.musics = this.options.filter(m => m.name.toLowerCase().includes(filterValue));
  }
  focusInput() {
    this.inputElement.nativeElement.focus();
  }

  addPraise(){
      const groupId = this.addPraiseForm.get("group")!.value;
      const group = this.groups.filter(g => g.id == groupId)[0];
      
      const musicIdx =  this.options.findIndex(music => {
        const musicInfo = this.addPraiseForm.get("music")!.value as string;
        const musicInfos = musicInfo.split("|");
        return musicInfos[0] === music.name && musicInfos[1] === music.singer;
      });
      const music = this.options[musicIdx];
     
      const payload = {
        id: this.cultInfosService.getCultInfos,   
        group,
        music
      } as AddPraise;
      
      this.musicApi.addPraiseOnCult(payload).subscribe(
        {
          next: res => {
            this.toast.success("Louvou adicionado com sucesso");
            this.router.navigate(["home/cult/details"]);
          },
          error: err => {
            if(err.status == 403) {

              this.toast.error("sessão expirada")
              this.router.navigate(["login"])
            }
            this.toast.error("Entre em contato com o ADM do sistema","Error ao adicionar louvor", )
            this.router.navigate(["home/cult/details"]);
          }
        }
      )
      

  }




}
