import { Injectable } from '@angular/core';
import { CultResponse } from '../model/cult/cult';

@Injectable({
  providedIn: 'root'
})
export class TransferInfoCultService {

  private cultInfos: CultResponse | null

  constructor() { 
    this.cultInfos = null
  }

  get getCultInfos(): CultResponse | null {
    return this.cultInfos
  }

  set setCultInfos(cult: CultResponse) {
    this.cultInfos = cult
  }
}
