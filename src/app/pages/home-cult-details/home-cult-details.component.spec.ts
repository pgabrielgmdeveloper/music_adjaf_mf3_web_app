import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCultDetailsComponent } from './home-cult-details.component';

describe('HomeCultDetailsComponent', () => {
  let component: HomeCultDetailsComponent;
  let fixture: ComponentFixture<HomeCultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCultDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
