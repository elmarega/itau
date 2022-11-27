import { DataService } from '../../services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { ISeries } from '../../models/chart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent implements OnInit {
  add: boolean = false;
  form!: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      year1: [null, Validators.required],
      year2: [null, Validators.required],
      year3: [null, Validators.required],
    });
  }

  sendData() {
    const { name, year1, year2, year3 } = this.form.getRawValue();

    let dataFinal: ISeries = {
      name: name,
      data: [year1, year2, year3],
    };
    this.dataService.addData([dataFinal]);
    this.add = !this.add;
  }
}
