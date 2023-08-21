import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/public/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/private/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
