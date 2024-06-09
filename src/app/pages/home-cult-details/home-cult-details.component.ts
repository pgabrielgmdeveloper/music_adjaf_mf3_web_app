import { Component, OnInit } from '@angular/core';
import { TransferInfoCultService } from '../../services/transfer-info-cult.service';
import { CultResponse } from '../../model/cult/cult';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-cult-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home-cult-details.component.html',
  styleUrl: './home-cult-details.component.scss'
})
export class HomeCultDetailsComponent implements OnInit {

  cult: CultResponse = {} as CultResponse

  constructor(private cultInfoService: TransferInfoCultService){}
  
  ngOnInit(): void {
    this.cult = this.cultInfoService.getCultInfos ? this.cultInfoService.getCultInfos : {} as CultResponse
  }



}
