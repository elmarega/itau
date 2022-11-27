import { ISeries } from 'src/app/models/chart';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { ServiceHttpService } from '../httpService/service-http.service';
import { of, throwError } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpService: ServiceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceHttpService],
    });
    service = TestBed.inject(DataService);
    httpService = TestBed.inject(ServiceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addData', () => {
    const mockSeries: ISeries[] = [
      {
        name: 'a',
        data: [12, 2, 4],
      },
    ];

    service.addData(mockSeries);

    service.dataChart$.subscribe((data) =>
      expect(data.series).toEqual(mockSeries)
    );
  });

  it('should call setChartType', () => {
    const mockType = 'area';

    service.setChartType(mockType);

    service.dataChart$.subscribe((data) =>
      expect(data.chart.type).toEqual(mockType)
    );
  });

  it('should call removeData', () => {
    const result: ISeries[] = [
      {
        name: 'b',
        data: [5, 5, 5],
      },
    ];

    const mockSeriesRemove: ISeries[] = [
      {
        name: 'a',
        data: [12, 2, 4],
      },
      {
        name: 'b',
        data: [5, 5, 5],
      },
    ];

    service.addData(mockSeriesRemove);

    service.removeData(0);

    service.dataChart$.subscribe((data) => expect(data.series).toEqual(result));
  });

  it('should call editData', () => {
    const mockResult: ISeries = {
      name: 'b',
      data: [5, 5, 5],
    };

    const mockSeries: ISeries[] = [
      {
        name: 'a',
        data: [5, 5, 5],
      },
    ];

    service.addData(mockSeries);

    service.editData(mockResult, 0);

    service.dataChart$.subscribe((data) =>
      expect(data.series).toEqual([mockResult])
    );
  });

  it('should call getApiData and sucess', () => {
    const mockData: ISeries[] = [
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
    spyOn(httpService, 'getData').and.returnValue(of(mockData));
    const spy = spyOn(service, 'addData');

    service.getApiData();

    expect(spy).toHaveBeenCalledWith(mockData);
  });

  it('should call getApiData and error', () => {
    spyOn(httpService, 'getData').and.returnValue(
      throwError(() => new Error('a'))
    );
    const spy = spyOn(service, 'addData');
    service.getApiData();

    expect(spy).toHaveBeenCalledWith(service.dataStatic);
  });
});
