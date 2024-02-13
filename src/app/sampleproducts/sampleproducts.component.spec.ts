import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleproductsComponent } from './sampleproducts.component';

describe('SampleproductsComponent', () => {
  let component: SampleproductsComponent;
  let fixture: ComponentFixture<SampleproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
