import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekertjeComponent } from './zoekertje.component';

describe('ZoekertjeComponent', () => {
  let component: ZoekertjeComponent;
  let fixture: ComponentFixture<ZoekertjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekertjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekertjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
