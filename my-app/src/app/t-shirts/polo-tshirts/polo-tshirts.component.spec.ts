import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloTshirtsComponent } from './polo-tshirts.component';

describe('PoloTshirtsComponent', () => {
  let component: PoloTshirtsComponent;
  let fixture: ComponentFixture<PoloTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloTshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoloTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
