import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottonTshirtsComponent } from './cotton-tshirts.component';

describe('CottonTshirtsComponent', () => {
  let component: CottonTshirtsComponent;
  let fixture: ComponentFixture<CottonTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottonTshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CottonTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
