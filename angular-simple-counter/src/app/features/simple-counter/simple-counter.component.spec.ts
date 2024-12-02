import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCounterComponent } from './simple-counter.component';

describe('SimpleCounterComponent', () => {
  let component: SimpleCounterComponent;
  let fixture: ComponentFixture<SimpleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
