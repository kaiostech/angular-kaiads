import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';

@Component({
  selector: 'SoftKeys',
  templateUrl: './soft-keys.component.html',
  styleUrls: ['./soft-keys.component.css']
})
export class SoftKeysComponent implements OnInit {
  @Input() navItem: NavItem;
  constructor() { }

  ngOnInit(): void { }

}
