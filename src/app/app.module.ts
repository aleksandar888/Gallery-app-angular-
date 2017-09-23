import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {ImageService} from './image.service';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: 'gallery', component : GalleryComponent
  },
  {
    path: 'image/:id', component : ImageDetailComponent
  },
  {
    path: 'upload', component : ImageUploadComponent
  },



];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
