import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesLatestComponent } from './messages-latest.component';

describe('MessagesLatestComponent', () => {
  let component: MessagesLatestComponent;
  let fixture: ComponentFixture<MessagesLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
