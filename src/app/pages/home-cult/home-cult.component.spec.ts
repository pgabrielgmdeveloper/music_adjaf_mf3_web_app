import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCultComponent } from './home-cult.component';

describe('HomeCultComponent', () => {
  let component: HomeCultComponent;
  let fixture: ComponentFixture<HomeCultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
