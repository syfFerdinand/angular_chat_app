import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageCardComponent } from './user-message-card.component';

describe('UserMessageCardComponent', () => {
  let component: UserMessageCardComponent;
  let fixture: ComponentFixture<UserMessageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMessageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
