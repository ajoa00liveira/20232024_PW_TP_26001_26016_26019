import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFossilsComponent } from './ex-fossils.component';

describe('ExFossilsComponent', () => {
  let component: ExFossilsComponent;
  let fixture: ComponentFixture<ExFossilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExFossilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExFossilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
