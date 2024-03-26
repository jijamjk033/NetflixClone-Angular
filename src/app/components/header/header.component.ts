import { Component, inject } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
  router=inject(Router);
  loginService = inject(LoginService)
  logOut(): void {
    // Clear local storage or perform any other logout-related tasks
    localStorage.clear();

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

}
