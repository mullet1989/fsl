import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  _menuItems: IMenuItem[];

  constructor() {
    this._menuItems = [
      { name: "Home", route: "/" },
      { name: "Admin", route: "/admin" }
    ];
  }

  ngOnInit() {
  }

}


interface IMenuItem {
  name: string;
  route: string;
}
