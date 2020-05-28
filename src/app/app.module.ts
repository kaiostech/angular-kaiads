import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FullscreenAdComponent } from './pages/fullscreen-ad/fullscreen-ad.component';
import { BannerAdComponent } from './pages/banner-ad/banner-ad.component';
import { DPadComponent } from './pages/dpad/dpad.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SoftKeysComponent } from './components/soft-keys/soft-keys.component';
import { KaiAdComponent } from './ads/kai-ad/kai-ad.component';
import { Globals } from './globals/globals';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FullscreenAdComponent,
    BannerAdComponent,
    DPadComponent,
    NavItemComponent,
    SoftKeysComponent,
    KaiAdComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
