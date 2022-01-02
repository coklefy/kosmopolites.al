import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /** TODO: to be refactored with enumeration */
  navbarItems = [
    'Home',
    'Politics',
    'Business',
    'Tech',
    'Science',
    'Health',
    'Sports',
    'Arts',
    'Food',
    'LifeStyle',
    'Education',
    'Travel',
    'Entertainment',
  ];
}
