import { Component, OnInit } from '@angular/core';
import { StaticProvider } from '../StaticProvider';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  itemsDenomination: Array<String> = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchItemsDenomination();
  }

  private fetchItemsDenomination() {
    new StaticProvider().navbarItems.forEach((item) =>
      this.itemsDenomination.push(item.getDenominaiton())
    );
  }
}
