import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() title:string;
  @Input() navItems: NavItem[];
  @Input() show: boolean;

  stylesObj = {
    height: '30px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'white',
    flex: 1
  };
  focusStylesObj = {
    backgroundColor: '#E7E7E7'
  };

  constructor() { }

  ngOnInit(): void {
  }

  setStyles(focus:boolean) {
    if (focus) {
      return {...this.stylesObj, ...this.focusStylesObj};
    }  else {
      return this.stylesObj;
    }
  }
}
