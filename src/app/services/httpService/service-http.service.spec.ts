import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ServiceHttpService } from './service-http.service';
import { HttpClient } from '@angular/common/http';
import { ISeries } from 'src/app/models/chart';

const mockData: ISeries[] = [
  {
    data: [85, 82, 80],
    name: 'Breanna Toledo',
  },
];

const url = 'https://app.fakejson.com/q';

describe('ServiceHttpService', () => {
  let service: ServiceHttpService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ServiceHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getData sucess', () => {
    service.getData().subscribe((res) => expect(res).toEqual(mockData));

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush(mockData);
  });
});
