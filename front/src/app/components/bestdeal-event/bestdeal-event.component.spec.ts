import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdealEventComponent } from './bestdeal-event.component';

describe('BestdealEventComponent', () => {
  let component: BestdealEventComponent;
  let fixture: ComponentFixture<BestdealEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestdealEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestdealEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
