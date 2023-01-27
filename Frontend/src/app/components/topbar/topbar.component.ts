import { Component,OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent  implements OnInit{


  user : any;

  constructor(private storage: StorageService){}
  
  ngOnInit(): void {
      this.user=this.storage.getUser()
  }

}
