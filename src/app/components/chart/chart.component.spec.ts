import { DataService } from './../../services/dataService/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dataServiceStub } from 'src/app/stubServices/dataService-stub';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartComponent],
      providers: [dataServiceStub],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const spy = spyOn(dataService, 'getApiData');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should call changeChartType', () => {
    const spy = spyOn(dataService, 'setChartType');

    component.changeChartType(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
});
