import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';

@Component({
  selector: 'NavItem',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navItem: NavItem;
  @Input() index: number;
  @Input() styles: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      'focus': this.navItem.focus,
      'middle': this.index === 1 || this.index === 4,
    }
    return classes;
  }
}
