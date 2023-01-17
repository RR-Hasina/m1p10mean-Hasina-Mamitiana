import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() profile: String = "";

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {

  }

  redirectionClient(page: string) {
    if (page === "ajout") this.router.navigate(["/client", "ajout"]);
    if (page === "depot") this.router.navigate(["/client", "depot"]);
    if (page === "liste") this.router.navigate(["/client", "liste"]);
  }

}
