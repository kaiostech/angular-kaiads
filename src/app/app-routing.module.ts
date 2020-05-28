import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DPadComponent } from './pages/dpad/dpad.component';
import { FullscreenAdComponent } from './pages/fullscreen-ad/fullscreen-ad.component';
import { BannerAdComponent } from './pages/banner-ad/banner-ad.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'd-pad', component: DPadComponent },
  { path: 'fullscreen-ad', component: FullscreenAdComponent },
  { path: 'banner-ad', component: BannerAdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
