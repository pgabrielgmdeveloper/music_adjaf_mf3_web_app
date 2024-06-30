import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(), 
    provideAnimationsAsync(), provideHttpClient(), 
    provideAnimationsAsync(), provideAnimationsAsync(), 
    provideAnimationsAsync(), provideAnimationsAsync(), 
    provideAnimationsAsync(),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-right',
    }), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};


