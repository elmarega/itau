import { DataService } from '../../services/dataService/data.service';
import { ISeries } from 'src/app/models/chart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent implements OnInit {
  @Input() data!: ISeries;
  @Input() index!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  deletData() {
    this.dataService.removeData(this.index);
  }
}
