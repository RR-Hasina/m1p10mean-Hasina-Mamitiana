import { Component, OnInit } from '@angular/core';
import { ReparationPage } from 'src/app/models/voiture';
import { BonsortieService } from 'src/app/services/bonsortie/bonsortie.service';

@Component({
  selector: 'app-bon-sortie',
  templateUrl: './bon-sortie.component.html',
  styleUrls: ['./bon-sortie.component.scss']
})
export class BonSortieComponent implements OnInit {

  voitures!:ReparationPage;
  keyword:string="";
  currentPage:number=1;
  pageSize:number=2;
  pages!:Array<number>;
  ajouter = false;

  constructor(private service:BonsortieService){};

  ngOnInit(): void {
    console.log("tonga");
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

  
  validation(imm:any,index:any){

    this.service.validerBon(imm).subscribe({
      next: (data) => {
        document.getElementById("btnclos"+index)?.click();
        this.Ongetvoiture();
        this.ajouter = true;
        setTimeout(() => {
          this.ajouter = false;
        }, 4000);

      },
      error: (err) => {console.log(err)},
    });

  }

}
