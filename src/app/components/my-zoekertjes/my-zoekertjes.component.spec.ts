import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZoekertjesComponent } from './my-zoekertjes.component';

describe('MyZoekertjesComponent', () => {
  let component: MyZoekertjesComponent;
  let fixture: ComponentFixture<MyZoekertjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyZoekertjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZoekertjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
