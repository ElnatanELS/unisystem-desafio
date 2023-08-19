import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{ path: 'auth', loadChildren: () => import('./pages/public/auth/auth.module').then(m => m.AuthModule) },


{ path: 'dashboard', loadChildren: () => import('./pages/private/dashboard/dashboard.module').then(m => m.DashboardModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
