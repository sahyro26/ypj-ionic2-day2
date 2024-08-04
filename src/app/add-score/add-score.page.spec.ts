import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddScorePage } from './add-score.page';

describe('AddScorePage', () => {
  let component: AddScorePage;
  let fixture: ComponentFixture<AddScorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
