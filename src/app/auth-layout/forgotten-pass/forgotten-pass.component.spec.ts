import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenPassComponent } from './forgotten-pass.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ForgottenPassComponent', () => {
  let component: ForgottenPassComponent;
  let fixture: ComponentFixture<ForgottenPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        RouterTestingModule],
      declarations: [ ForgottenPassComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
