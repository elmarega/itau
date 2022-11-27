import { DataService } from './../../services/dataService/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { dataServiceStub } from 'src/app/stubServices/dataService-stub';

import { ModalDeleteComponent } from './modal-delete.component';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent],
      providers: [dataServiceStub],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deletData', () => {
    component.index = 1;
    const spy = spyOn(dataService, 'removeData');

    component.deletData();

    expect(spy).toHaveBeenCalledWith(1);
  });
});
