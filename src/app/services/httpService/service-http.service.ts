import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISeries } from 'src/app/models/chart';

@Injectable({
  providedIn: 'root',
})
export class ServiceHttpService {
  url = 'https://app.fakejson.com/q';

  data = {
    token: 'WZ7usTsO6tkuDz77pcTSOA',
    data: {
      name: 'name',
      data: 'functionArray|3|numberInt|60,85',
      _repeat: 3,
    },
  };

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ISeries[]> {
    return this.httpClient.post<ISeries[]>(this.url, this.data);
  }
}
