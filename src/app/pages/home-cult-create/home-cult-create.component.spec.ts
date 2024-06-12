import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCultCreateComponent } from './home-cult-create.component';

describe('HomeCultCreateComponent', () => {
  let component: HomeCultCreateComponent;
  let fixture: ComponentFixture<HomeCultCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCultCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCultCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
