import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExArtComponent } from './ex-art.component';

describe('ExArtComponent', () => {
  let component: ExArtComponent;
  let fixture: ComponentFixture<ExArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
