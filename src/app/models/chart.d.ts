import * as ApexCharts from 'ng-apexcharts';

export interface Chart {
  chart: ApexCharts.ApexChart;
  series: ISeries[];
  title: ApexCharts.ApexTitleSubtitle;
  xaxis: ApexCharts.ApexXAxis;
}

interface ISeries {
  name: string;
  data: number[];
}
