import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReparationPage } from 'src/app/models/voiture';
import { PayementService } from 'src/app/services/payement/payement.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {


   voitures!:ReparationPage;
   keyword:string="";
   currentPage:number=1;
   pageSize:number=2;
   pages!:Array<number>;
   ajouter = false;

constructor(private service:PayementService,private router:Router){};

ngOnInit(): void {
    this.OngetnonPayer();
    console.log(this.pages);
}

OngetnonPayer(){
  this.service.getNonpayer(this.keyword,this.currentPage,this.pageSize).subscribe({
    next: (data) => {
      this.voitures=data;
      if(data != null) this.pages=new Array<number>(data.totalPages);
    },
    error: (err) => {console.log(err)},
  })
}

  onPageVoitures(i:number) {
   
    this.currentPage=i+1;
    console.log(this.keyword,this.currentPage,this.pageSize);
    this.OngetnonPayer();
    }

  onSearch(data:any) {
   
  this.keyword=data.keyword;
  console.log(this.keyword,this.currentPage,this.pageSize);
  this.OngetnonPayer();
  }

  validation(imm:any,index:any){
    console.log(imm);

    this.service.payer(imm,this.voitures.docs[index].reparation?.datePayement).subscribe({
      next: (data) => {
        console.log(data);
        document.getElementById("btnclos"+index)?.click();
        this.OngetnonPayer();
        this.ajouter = true;
        setTimeout(() => {
          this.ajouter = false;
        }, 4000);

      },
      error: (err) => {console.log(err)},
    });

  }

  
}
