import { Component, OnInit, HostListener } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullscreen-ad',
  templateUrl: './fullscreen-ad.component.html',
  styleUrls: ['./fullscreen-ad.component.css']
})
export class FullscreenAdComponent implements OnInit {
  navItem: NavItem;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navItem = {
      name: '',
      focus: false,
      left: 'BACK',
      center: 'SELECT',
      right: ''
    };
  }

  @HostListener('document:keydown.SoftLeft')
  @HostListener('document:keydown.l')
  keyLeft() {
    this.router.navigate(['']);
  }

}
