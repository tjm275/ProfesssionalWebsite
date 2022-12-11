import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResearchComponent } from './research/research.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ModalComponent } from './modal/modal.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ResearchComponent,
    ContactMeComponent,
    ModalComponent
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/about-me', pathMatch: 'full' },
      {path: 'work-experience', component: WorkExperienceComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'research', component: ResearchComponent},
      {path: 'contact-me', component: ContactMeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
