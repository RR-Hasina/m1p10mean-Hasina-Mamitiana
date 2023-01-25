import { Component, OnInit } from '@angular/core';
import { VoiturePage } from 'src/app/models/voiture';
import { StorageService } from 'src/app/services/storage/storage.service';
import { VoitureService } from 'src/app/services/voiture/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent implements OnInit {

  voitures!:VoiturePage;
   keyword:string="";
   currentPage:number=1;
   pageSize:number=2;
   pages!:Array<number>;
   ajouter = false;

constructor(private service:VoitureService,private serviceStorage:StorageService){};

ngOnInit(): void {
  console.log(this.serviceStorage.getUser().email);
    this.Ongetvoiture();
}

Ongetvoiture(){
  this.service.getvoiturePage(this.serviceStorage.getUser().email,this.keyword,this.currentPage,this.pageSize).subscribe({
    next: (data) => {
      this.voitures=data;
      if(data != null) {this.pages=new Array<number>(data.totalPages)}; 
    },
    error: (err) => {console.log(err)},
  })
}

onPageVoitures(i:number) {
  this.currentPage=i+1;
  console.log(this.keyword,this.currentPage,this.pageSize);
  this.Ongetvoiture();
  }

onSearch(data:any) {
this.keyword=data.keyword;
console.log(this.keyword,this.currentPage,this.pageSize);
this.Ongetvoiture();
}
}
