import { DataService } from './../../services/dataService/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dataServiceStub } from 'src/app/stubServices/dataService-stub';

import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [dataServiceStub],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deletData', () => {
    const spy = spyOn(dataService, 'removeData');

    component.deletData(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
});
