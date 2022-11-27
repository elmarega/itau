import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { ModalDeleteComponent } from './components/modal-calcel/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    AddDataComponent,
    ModalEditComponent,
    ModalDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
