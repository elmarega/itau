import { FactoryProvider } from '@angular/core';
import { DataService } from './../services/dataService/data.service';

export const dataServiceStub: FactoryProvider = {
  provide: DataService,
  useFactory: () => ({
    getApiData() {},
    addData() {},
    setChartType() {},
    editData() {},
    removeData() {},
  }),
};
