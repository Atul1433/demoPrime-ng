import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilcompanyComponent } from './oilcompany.component';

describe('OilcompanyComponent', () => {
  let component: OilcompanyComponent;
  let fixture: ComponentFixture<OilcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OilcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
