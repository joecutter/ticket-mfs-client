import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'angular2-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SliderModule } from 'angular-image-slider';

import { LoaderComponent } from '../components/Loader/loader.component';
import { CarouselComponent } from '../components/Carousel/Carousel.component';
import { AlertComponent } from '../components/Alert/alert.component';
import { ButtonLoaderComponent } from '../components/ButtonLoader/ButtonLoader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    CarouselComponent,
    AlertComponent,
    ButtonLoaderComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    NgxPaginationModule,
    NgxDropzoneModule,
    NgxSpinnerModule,
    SliderModule,
    LoaderComponent,
    CarouselComponent,
    AlertComponent,
    ButtonLoaderComponent,
  ],
})
export class SharedModule {}
