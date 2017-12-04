import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoekertjeComponent } from './add-zoekertje.component';

describe('AddZoekertjeComponent', () => {
  let component: AddZoekertjeComponent;
  let fixture: ComponentFixture<AddZoekertjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZoekertjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZoekertjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
