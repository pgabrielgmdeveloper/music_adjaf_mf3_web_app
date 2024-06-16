import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCultAddpraiseComponent } from './home-cult-addpraise.component';

describe('HomeCultAddpraiseComponent', () => {
  let component: HomeCultAddpraiseComponent;
  let fixture: ComponentFixture<HomeCultAddpraiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCultAddpraiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCultAddpraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
