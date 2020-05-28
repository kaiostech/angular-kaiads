import { Component, OnInit, HostListener } from '@angular/core';
import { NavItem } from '../../models/NavItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dashboardNavItems:NavItem[];
  menuNavItems: NavItem[];
  activeView:string;
  activeViewItem:number;
  showMenu:boolean;
  prevActiveViewItem:number;

  stylesObj = {
    height: '60px',
    border: '1px solid #E7E7E7',
    borderRadius: '10px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'white',
    flex: 1
  };
  middleStylesObj = {
    margin: '5px 0px'
  };
  focusStylesObj = {
    backgroundColor: '#E7E7E7'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dashboardNavItems = [
      {name: 'D Pad', focus: true, center: 'SELECT'},
      {name: 'Fullscreen Ad', focus: false, center: 'SELECT'},
      {name: 'Banner Ad', focus: false, center: 'SELECT', right: 'MENU'},
      {name: '', focus: false, center: 'SELECT'},
      {name: '', focus: false, center: 'SELECT'},
      {name: '', focus: false, center: 'SELECT'},
    ];
    this.menuNavItems = [
      {name: 'Option 1', focus: false, center: 'SELECT'},
      {name: 'Option 2', focus: false, center: 'SELECT'},
      {name: 'Option 3', focus: false, center: 'SELECT'}
    ];
    this.activeView = 'dashboard';
    this.activeViewItem = 0;
    this.showMenu = false;
    this.prevActiveViewItem = 0;
  }

  @HostListener('document:keydown.arrowup')
  moveUp() {
    const typeOfNavItems = this.activeView === 'dashboard' ? 'dashboardNavItems' : 'menuNavItems';
    if (this.activeViewItem !== 0) {
      this[typeOfNavItems][this.activeViewItem].focus = false;
      this[typeOfNavItems][this.activeViewItem - 1].focus = true;
      this.activeViewItem -= 1;
    }
  }

  @HostListener('document:keydown.arrowdown')
  moveDown() {
    const typeOfNavItems = this.activeView === 'dashboard' ? 'dashboardNavItems' : 'menuNavItems';
    if (this.activeViewItem !== this[typeOfNavItems].length - 1) {
      this[typeOfNavItems][this.activeViewItem].focus = false;
      this[typeOfNavItems][this.activeViewItem + 1].focus = true;
      this.activeViewItem += 1;
    }
  }

  @HostListener('document:keydown.arrowleft')
  moveLeft() {
    const typeOfNavItems = this.activeView === 'dashboard' ? 'dashboardNavItems' : 'menuNavItems';
    if (typeOfNavItems === 'dashboardNavItems') {
      if (this.activeViewItem === 3 || this.activeViewItem === 4 || this.activeViewItem === 5) {
        this[typeOfNavItems][this.activeViewItem].focus = false;
        this[typeOfNavItems][this.activeViewItem - 3].focus = true;
        this.activeViewItem -= 3;
      }
    } else {
      this.moveUp();
    }
    
  }

  @HostListener('document:keydown.arrowright')
  moveRight() {
    const typeOfNavItems = this.activeView === 'dashboard' ? 'dashboardNavItems' : 'menuNavItems';
    if (typeOfNavItems === 'dashboardNavItems') {
      if (this.activeViewItem === 0 || this.activeViewItem === 1 || this.activeViewItem === 2) {
        this[typeOfNavItems][this.activeViewItem].focus = false;
        this[typeOfNavItems][this.activeViewItem + 3].focus = true;
        this.activeViewItem += 3;
      }
    } else {
      this.moveDown();
    }
    
  }

  @HostListener('document:keydown.enter')
  keyCenter() {
    if (this.activeView === 'dashboard') {
      switch(this.dashboardNavItems[this.activeViewItem].name) {
        case 'D Pad': this.router.navigate(['/d-pad']); break;
        case 'Fullscreen Ad': this.router.navigate(['/fullscreen-ad']); break;
        case 'Banner Ad': this.router.navigate(['/banner-ad']); break;
        default:
      }
    } else {
      this.activeView = 'dashboard';
      this.dashboardNavItems[this.prevActiveViewItem].focus = true;
      this.menuNavItems[this.activeViewItem].focus = false;
      this.activeViewItem = this.prevActiveViewItem;
      this.showMenu = false;
    }
  }

  @HostListener('document:keydown.SoftRight')
  @HostListener('document:keydown.r')
  keyRight() {
    if (this.activeView === 'dashboard' && this.dashboardNavItems[this.activeViewItem].name === 'Banner Ad') {
      this.activeView = 'menu';
      this.menuNavItems[0].focus = true;
      this.prevActiveViewItem = this.activeViewItem;
      this.activeViewItem = 0;
      this.showMenu = true;
    }
  }

  setStyles(i:number, focus:boolean) {
    if (i == 1 || i == 4) {
      if (focus) {
        return {
          ...this.stylesObj,
          ...this.middleStylesObj,
          ...this.focusStylesObj,
        };
      } else {
        return {
          ...this.stylesObj,
          ...this.middleStylesObj,
        };
      }
    } else {
      if (focus) {
        return {
          ...this.stylesObj,
          ...this.focusStylesObj,
        };
      } else {
        return {
          ...this.stylesObj,
        };
      }
    }
  }
}
