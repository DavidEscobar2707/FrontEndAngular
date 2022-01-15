import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/auth')
  }
}
