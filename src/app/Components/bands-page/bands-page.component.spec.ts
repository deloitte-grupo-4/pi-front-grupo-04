import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsPageComponent } from './bands-page.component';

describe('BandsPageComponent', () => {
  let component: BandsPageComponent;
  let fixture: ComponentFixture<BandsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
