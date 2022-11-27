import { DataService } from './../../services/dataService/data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { dataServiceStub } from 'src/app/stubServices/dataService-stub';

import { ModalEditComponent } from './modal-edit.component';
import { ISeries } from 'src/app/models/chart';

describe('ModalEditComponent', () => {
  let component: ModalEditComponent;
  let fixture: ComponentFixture<ModalEditComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEditComponent],
      imports: [ReactiveFormsModule],
      providers: [dataServiceStub],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    component.form = new FormBuilder().group({
      name: ['a'],
      year1: [12],
      year2: [2],
      year3: [4],
    });
    const data: ISeries = {
      name: 'a',
      data: [12, 2, 4],
    };
    const spy = spyOn(dataService, 'editData');

    component.dataIndex = 5;
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(data, 5);
  });

  it('should test onChanges', () => {
    component.dataEdit = {
      name: 'a',
      data: [12, 2, 4],
    };

    component.ngOnChanges();

    const { name, year1, year2, year3 } = component.form.getRawValue();

    expect(name).toEqual('a');
    expect(year1).toEqual(12);
    expect(year2).toEqual(2);
    expect(year3).toEqual(4);
  });
});
