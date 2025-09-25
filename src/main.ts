import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
@NgModule({
  imports: [MatIconModule]
})
export class AppModule { }
