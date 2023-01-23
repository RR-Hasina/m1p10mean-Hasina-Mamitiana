import { Component, OnInit } from '@angular/core';
import { ReparationPage } from 'src/app/models/voiture';
import { ReparationService } from 'src/app/services/reparation/reparation.service';
declare var $: any;

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})

export class ReparationComponent implements OnInit {

  voitures!:ReparationPage;
   keyword:string="";
   currentPage:number=1;
   pageSize:number=2;
   pages!:Array<number>;
   ajouter = false;

constructor(private service:ReparationService){};

ngOnInit(): void {
    this.Ongetvoiture();
}

Ongetvoiture(){
  this.service.getvoiture(this.keyword,this.currentPage,this.pageSize).subscribe({
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
