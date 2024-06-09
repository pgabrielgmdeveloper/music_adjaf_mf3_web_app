import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMusicCreateComponent } from './home-music-create.component';

describe('HomeMusicCreateComponent', () => {
  let component: HomeMusicCreateComponent;
  let fixture: ComponentFixture<HomeMusicCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMusicCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMusicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
