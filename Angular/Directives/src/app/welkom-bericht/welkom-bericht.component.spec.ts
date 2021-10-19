import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelkomBerichtComponent } from './welkom-bericht.component';

describe('WelkomBerichtComponent', () => {
  let component: WelkomBerichtComponent;
  let fixture: ComponentFixture<WelkomBerichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelkomBerichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelkomBerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
