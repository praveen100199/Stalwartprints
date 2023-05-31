import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolysterTshirtsComponent } from './polyster-tshirts.component';

describe('PolysterTshirtsComponent', () => {
  let component: PolysterTshirtsComponent;
  let fixture: ComponentFixture<PolysterTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolysterTshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolysterTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
