import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ServerService} from '../../shared/service/server.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  /*let serverService: ServerService;
  let spy: jasmine.Spy;
  let mockError;*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientModule,
        RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [ ServerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    /*fixture.debugElement.injector.get(ServerService);
    mockError = {
      'error': 'null',
      'user': {
        'id': '1',
        'email': 'maty@globalbit.co.il',
        'profile': {
          'first_name': 'Maty',
          'last_name': 'Michalsky'
        }
      }
    };
    spy = spyOn(serverService, 'login').and.returnValue(Observable.of(mockError));*/
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should call ServerService', () => {
    component.onSubmit()/!*.login({email: 'maty@globalbit.co.il', password: 'Aa123456'})*!/;
    // expect(spy.calls.any()).toBeTruthy();
    expect(serverService.login).toHaveBeenCalled();
  });*/

  /*it('should set error response', () => {
    component.onSubmit();
    expect(component.data).toEqual(mockError);
  });*/
});
