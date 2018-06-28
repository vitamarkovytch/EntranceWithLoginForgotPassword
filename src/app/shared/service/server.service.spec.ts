import {TestBed, inject} from '@angular/core/testing';

import {ServerService} from './server.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerService]
    });
  });

  it('should be created', inject([ServerService],
    (service: ServerService) => {
      expect(service).toBeTruthy();
    }));

  it('should be response from server on POST Login request',
    inject([ServerService, HttpTestingController],
      (service: ServerService, backend: HttpTestingController) => {

        const mockResponseLogin =
          {
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
        service.login({email: 'maty@globalbit.co.il', password: 'Aa123456'}).subscribe(
          error => {
            expect(error).toEqual(mockResponseLogin);
          });

        backend.expectOne({
          method: 'POST',
          url: 'https://globalbit.co.il/front-end-assignment/login.php'
        }).flush(mockResponseLogin);
      }));


  it('should be response from server on POST Forgot password request',
    inject([ServerService, HttpTestingController],
      (service: ServerService, backend: HttpTestingController) => {

        const mockResponseForgotPass =
          {
            'error': 'null'
          };
        service.forgotPassword({email: 'maty@globalbit.co.il'}).subscribe(
          error => {
            expect(error).toEqual(mockResponseForgotPass);
          });

        backend.expectOne({
          method: 'POST',
          url: 'https://globalbit.co.il/front-end-assignment/forgot-password.php'
        }).flush(mockResponseForgotPass);
      }));




  it('should be ERROR \'Password is incorrect\' from server on POST Login request',
    inject([ServerService, HttpTestingController],
      (service: ServerService, backend: HttpTestingController) => {

        const mockErrorResponseLogin =
          {
            'error': {
              'code': '2',
              'description': 'Password is incorrect'
            }
          };
        service.login({email: 'maty@globalbit.co.il', password: 'aaaaa'}).subscribe(
          error => {
            expect(error).toEqual(mockErrorResponseLogin);
          });

        backend.expectOne({
          method: 'POST',
          url: 'https://globalbit.co.il/front-end-assignment/login.php'
        }).flush(mockErrorResponseLogin);
      }));

  it('should be ERROR `Email doesn\'t exists` from server on POST Login request',
    inject([ServerService, HttpTestingController],
      (service: ServerService, backend: HttpTestingController) => {

        const mockErrorEmeilResponseLogin =
          {
            'error': {
              'code': '1',
              'description': `Email doesn't exists`
            }
          };
        service.login({email: 'aaa@aaaa.com', password: 'Aa123456'}).subscribe(
          error => {
            expect(error).toEqual(mockErrorEmeilResponseLogin);
          });

        backend.expectOne({
          method: 'POST',
          url: 'https://globalbit.co.il/front-end-assignment/login.php'
        }).flush(mockErrorEmeilResponseLogin);
      }));



  it('should be ERROR `Email doesn\'t exists` from server on POST Forgot password request',
    inject([ServerService, HttpTestingController],
      (service: ServerService, backend: HttpTestingController) => {

        const mockErrorEmailResponseForgotPass =
          {
            'error': {
              'code': '1',
              'description': `Email doesn't exists`
            }
          };
        service.forgotPassword({email: 'aaaaa@aaa.com'}).subscribe(
          error => {
            expect(error).toEqual(mockErrorEmailResponseForgotPass);
          });

        backend.expectOne({
          method: 'POST',
          url: 'https://globalbit.co.il/front-end-assignment/forgot-password.php'
        }).flush(mockErrorEmailResponseForgotPass);
      }));


});
