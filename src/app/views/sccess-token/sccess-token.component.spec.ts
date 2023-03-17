import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SccessTokenComponent } from './sccess-token.component';

describe('SccessTokenComponent', () => {
  let component: SccessTokenComponent;
  let fixture: ComponentFixture<SccessTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SccessTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SccessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
