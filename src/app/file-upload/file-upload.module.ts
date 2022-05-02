import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { ContainerFileUploadComponent } from './container-file-upload/container-file-upload.component';
import { FilePresentationComponent } from './container-file-upload/file-presentation/file-presentation.component';
import { FileUploadingPresentationComponent } from './container-file-upload/file-uploading-presentation/file-uploading-presentation.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    ContainerFileUploadComponent,
    FilePresentationComponent,
    FileUploadingPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
