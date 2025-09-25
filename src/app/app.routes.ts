import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AUTH_ROUTES } from './modules/auth/auth.routes';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { USER_ROUTES } from './modules/user/user.routes';

export const routes: Routes = [
// get layout then get children routes from module routes
// auth/login -> auth module routes
  {path:"",
    loadChildren:()=>import("./modules/auth/auth.routes").then(m=>m.AUTH_ROUTES)
  },

  {path:"",
    loadChildren:()=>import("./modules/user/user.routes").then(m=>m.USER_ROUTES)
  },
  {path:"**",loadComponent:()=>import("./shared/components/not-found/not-found.component").then(m=>m.NotFoundComponent), title:"Not Found"}
];
