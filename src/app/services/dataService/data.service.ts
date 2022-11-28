import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chart, ISeries } from '../../models/chart';
import { ServiceHttpService } from '../httpService/service-http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataChart = new BehaviorSubject<Chart>({
    series: [],
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Vendas efetuadas',
    },
    xaxis: {
      categories: [2021, 2022, 2023],
    },
  });

  dataStatic: ISeries[] = [
    {
      data: [85, 82, 80],
      name: 'Breanna Toledo',
    },
    {
      data: [60, 70, 60],
      name: 'Victor Sanches',
    },
    {
      data: [65, 65, 85],
      name: 'Tino Sipes',
    },
  ];

  dataChart$ = this.dataChart.asObservable();

  constructor(private serviceHttpService: ServiceHttpService) {}

  getApiData() {
    this.serviceHttpService.getData().subscribe(
      (data) => this.addData(data),
      (error) => this.addData(this.dataStatic) //dataStatic usado somente para caso a Key da API de erro.
    );
  }

  addData(data: ISeries[]) {
    const { series } = this.dataChart.value;
    this.dataChart.next({
      ...this.dataChart.value,
      series: [...series, ...data],
    });
  }

  setChartType(value: any) {
    this.dataChart.next({ ...this.dataChart.value, chart: { type: value } });
  }

  editData(data: ISeries, index: number) {
    let series = this.dataChart.value.series;
    series[index] = data;

    this.dataChart.next({ ...this.dataChart.value, series: [...series] });
  }

  removeData(index: number) {
    let { series } = this.dataChart.value;
    series.splice(index, 1);

    this.dataChart.next({ ...this.dataChart.value, series: [...series] });
  }
}
