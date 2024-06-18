import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ContactComponent } from './pages/contact/contact.component';
import { provideNgxMask } from 'ngx-mask';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter([...routes, { path: 'register', component: ContactComponent }]),
     provideClientHydration(),
     provideNgxMask()
    ]
};
