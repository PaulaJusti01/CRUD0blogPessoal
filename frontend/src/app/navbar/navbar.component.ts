import { environment } from '../../environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair(){
    environment.token = null
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
