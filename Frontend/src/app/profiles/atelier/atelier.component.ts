import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.scss']
})
export class AtelierComponent implements OnInit {
  page?: String | null;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) {
    this.router.events.subscribe()
  }

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        const role = this.storageService.getUser().role;
        this.storageService.clean();
        document.getElementById("ModalClose")?.click();
        if (role == "client") {
          this.router.navigateByUrl("/login-client");
        }
        if (role == "finance") {
          this.router.navigateByUrl("/login-finance");
        }
        if (role == "atelier") {
          this.router.navigateByUrl("/login-atelier");
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
