import { Component, HostListener } from '@angular/core';
import { Globals } from './globals/globals';
declare const getKaiAd: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kaios';
  constructor(private globals:Globals) {}
  
  @HostListener('document:DOMContentLoaded')
  initKaiAd() {
    this.globals.isKaiAdLoad = true;
    this.globals.loadKaiAd = (container, callback) => {
      if (container) {
        getKaiAd({
          publisher: 'YOUR_PUBLISHER_ID',
          app: 'kaios app',
          slot: 'yourSlotName',
          h: 60,
          w: 230,
          container: document.getElementById(container),
          onerror: (err:any) => console.log('Ad error: ', err),
          onready: (ad:any) => {
            this.globals.ads = ad;
            ad.call('display', {
              tabindex: 0,
              navClass: 'items',
              display: 'block',
            })
            ad.on('display', callback);
            ad.on('click', () => console.log('click event') )
          }
        });
      } else {
        getKaiAd({
          publisher: 'YOUR_PUBLISHER_ID',
          app: 'kaios app',
          slot: 'yourSlotName',
          onerror: (err:any) => console.log('Ad error: ', err),
          onready: (ad:any) => {
            ad.call('display')
            ad.on('click', () => console.log('click event'))
          }
        });
      }
    } 
  }

}
