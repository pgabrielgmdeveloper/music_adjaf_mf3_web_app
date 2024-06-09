import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
  exports: [HeaderComponent]
})
export class SharedModule { }
