import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesImageComponent } from './slides-image.component';

describe('SlidesImageComponent', () => {
  let component: SlidesImageComponent;
  let fixture: ComponentFixture<SlidesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidesImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


