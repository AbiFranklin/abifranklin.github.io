import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysearchComponent } from './companysearch.component';

describe('CompanysearchComponent', () => {
  let component: CompanysearchComponent;
  let fixture: ComponentFixture<CompanysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanysearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
