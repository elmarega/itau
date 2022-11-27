import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Chart, ISeries } from '../../models/chart';
import { DataService } from '../../services/dataService/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data$!: Observable<Chart>;
  dataEdit!: ISeries;
  dataIndex!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.dataChart$;
  }

  deletData(index: number) {
    this.dataService.removeData(index);
  }
}
