import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoadingComponent } from "./shared/components/loading/loading.component";
import { CommonModule, NgIf } from '@angular/common';
import { LoaderServiceService } from './shared/services/loader-service.service';
import { inject } from '@angular/core';
import { CustomToastComponent } from './shared/components/custom-toast/custom-toast.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  imports: [RouterModule, LoadingComponent,CommonModule,NgIf ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'eccomerence';
  private loaderService = inject(LoaderServiceService);
  loading$ = this.loaderService.loading$; 
}
