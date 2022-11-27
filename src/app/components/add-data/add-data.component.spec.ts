import { ISeries } from 'src/app/models/chart';
import { DataService } from './../../services/dataService/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dataServiceStub } from 'src/app/stubServices/dataService-stub';

import { AddDataComponent } from './add-data.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('AddDataComponent', () => {
  let component: AddDataComponent;
  let fixture: ComponentFixture<AddDataComponent>;
  let dataServe: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDataComponent],
      imports: [ReactiveFormsModule],
      providers: [dataServiceStub],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDataComponent);
    component = fixture.componentInstance;
    dataServe = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendData', () => {
    component.form = new FormBuilder().group({
      name: 'testName',
      year1: 10,
      year2: 20,
      year3: 10,
    });

    const dataMock: ISeries = {
      name: 'testName',
      data: [10, 20, 10],
    };

    const spy = spyOn(dataServe, 'addData');

    component.add = true;

    component.sendData();

    expect(spy).toHaveBeenCalledWith([dataMock]);
    expect(component.add).toEqual(false);
  });
});
