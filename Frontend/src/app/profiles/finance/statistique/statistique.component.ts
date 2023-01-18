import { Component, OnInit } from '@angular/core';
import { StatService } from 'src/app/services/stat/stat.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss'],
})
export class StatistiqueComponent implements OnInit {

  stat : any  = {} ;

  constructor(private statservice: StatService) {}
  ngOnInit(){
     this.getstat();
  }

  getstat() {
    const obs = this.statservice.getStat().subscribe({
      next: (data) => {
        this.stat = data;
        this.createChartA();
        this.createChartB();
      },
      error: (err) => {},
    });
  }

  createChartA(){
    this.statservice.createAreaChart("myAreaChart",Object.keys(this.stat.statchi),Object.values(this.stat.statchi),this.statservice.number_format);
  }

  createChartB(){
    this.statservice.createAreaChart("myAreaChart1",Object.keys(this.stat.statbenefice),Object.values(this.stat.statbenefice),this.statservice.number_format);
  }
  
}
