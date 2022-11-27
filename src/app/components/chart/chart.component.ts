import { DataService } from '../../services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from '../../models/chart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  data$!: Observable<Chart>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getApiData();
    this.data$ = this.dataService.dataChart$;
  }

  changeChartType(value: any) {
    this.dataService.setChartType(value);
  }
}
