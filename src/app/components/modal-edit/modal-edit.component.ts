import { DataService } from '../../services/dataService/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISeries } from 'src/app/models/chart';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit, OnChanges {
  @Input() dataEdit!: ISeries;
  @Input() dataIndex!: number;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      year1: [null, Validators.required],
      year2: [null, Validators.required],
      year3: [null, Validators.required],
    });
  }

  ngOnChanges() {
    if (this.form) {
      this.form.controls['name'].setValue(this.dataEdit.name);
      this.form.controls['year1'].setValue(this.dataEdit.data[0]);
      this.form.controls['year2'].setValue(this.dataEdit.data[1]);
      this.form.controls['year3'].setValue(this.dataEdit.data[2]);
    }
  }

  onSubmit() {
    const { name, year1, year2, year3 } = this.form.getRawValue();

    let data: ISeries = {
      name,
      data: [year1, year2, year3],
    };

    this.dataService.editData(data, this.dataIndex);
  }
}
