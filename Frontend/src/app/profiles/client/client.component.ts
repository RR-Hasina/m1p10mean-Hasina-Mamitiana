import { Component, createPlatform, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  voitures: Array<any>=[];
  constructor(private storageService: StorageService, private authService: AuthService, private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.voitureService.getVoiture().subscribe({
      next: (data) => {
        this.voitures = [...data];
      }
    });
    console.log(this.voitures);
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
