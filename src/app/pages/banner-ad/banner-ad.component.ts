import { Component, OnInit, HostListener } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';
import { Globals } from 'src/app/globals/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-ad',
  templateUrl: './banner-ad.component.html',
  styleUrls: ['./banner-ad.component.css']
})
export class BannerAdComponent implements OnInit {
  navItems: NavItem[];
  activeViewItem: number;
  stylesObj = {
    height: '30px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'white',
    flex: 1
  };
  focusStylesObj = {
    backgroundColor: '#E7E7E7'
  };
  bannerFocusStyles = {
    border: '5px solid red',
  };
  constructor(private router: Router, private globals: Globals) { }

  ngOnInit(): void {
    this.navItems = [
      {name: 'K', focus: true, left: 'BACK', center: 'SELECT'},
      {name: 'A', focus: false, left: 'BACK', center: 'SELECT'},
      {name: 'I', focus: false, left: 'BACK', center: 'SELECT'},
      {name: 'O', focus: false, left: 'BACK', center: 'SELECT'},
      {name: 'S', focus: false, left: 'BACK', center: 'SELECT'},
      {name: 'KaiAd', focus: false, left: 'BACK', center: 'SELECT'},
    ];
    this.activeViewItem = 0;
  }

  @HostListener('document:keydown.arrowleft')
  @HostListener('document:keydown.arrowup')
  moveUp() {
    this.navItems[this.activeViewItem].focus = false;
    if (this.activeViewItem === 0) {
      this.navItems[this.navItems.length - 1].focus = true;
      this.activeViewItem = this.navItems.length - 1;
    } else {
      this.navItems[this.activeViewItem - 1].focus = true;
      this.activeViewItem -= 1;
    }
  }

  @HostListener('document:keydown.arrowright')
  @HostListener('document:keydown.arrowdown')
  moveDown() {
    this.navItems[this.activeViewItem].focus = false;
    if (this.activeViewItem === this.navItems.length - 1) {
      this.navItems[0].focus = true;
      this.activeViewItem = 0; 
    } else {
      this.navItems[this.activeViewItem + 1].focus = true;
      this.activeViewItem += 1;
    }
  }

  @HostListener('document:keydown.enter')
  keyCenter() {
    if (this.navItems[this.activeViewItem].name === 'KaiAd') {
      if (this.globals.isKaiAdLoad) {
        this.globals.ads.call('click');
      }
    }
  }

  @HostListener('document:keydown.SoftLeft')
  @HostListener('document:keydown.l')
  keyLeft() {
    this.router.navigate(['']);
  }

  setStyles(focus:boolean) {
    if (focus) {
      return {...this.stylesObj, ...this.focusStylesObj};
    }  else {
      return this.stylesObj;
    }
  }

}
