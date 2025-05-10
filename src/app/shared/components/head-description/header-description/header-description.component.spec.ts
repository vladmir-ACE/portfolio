import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDescriptionComponent } from './header-description.component';

describe('HeaderDescriptionComponent', () => {
  let component: HeaderDescriptionComponent;
  let fixture: ComponentFixture<HeaderDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
