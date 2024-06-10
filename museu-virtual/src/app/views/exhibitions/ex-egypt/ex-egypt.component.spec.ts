import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEgyptComponent } from './ex-egypt.component';

describe('ExEgyptComponent', () => {
  let component: ExEgyptComponent;
  let fixture: ComponentFixture<ExEgyptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExEgyptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExEgyptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
