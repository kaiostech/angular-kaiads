import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals/globals';

@Component({
  selector: 'KaiAd',
  templateUrl: './kai-ad.component.html',
  styleUrls: ['./kai-ad.component.css']
})
export class KaiAdComponent implements OnInit {
  @Input() banner : boolean;
  @Input() focus : boolean;
  @Input() focusStyles: any = {};

  constructor(private globals:Globals) { }

  ngOnInit(): void {
    if (this.globals.isKaiAdLoad) {
      if (this.banner) {
        this.globals.loadKaiAd('ad-container', this.setStyles);
      } else {
        this.globals.loadKaiAd();
      }
    }
  }

  setStyles() {
    document.getElementById('ad-container').style.margin = 'auto';
    if (this.focus) {
      Object.keys(this.focusStyles).forEach(key => {
        document.getElementById('ad-container').style[key] = this.focusStyles[key];
      })
    }
  }

  setFocusStyles() {
    if (this.focus) {
      return this.focusStyles;
    } else {
      return {};
    }
  }

}
