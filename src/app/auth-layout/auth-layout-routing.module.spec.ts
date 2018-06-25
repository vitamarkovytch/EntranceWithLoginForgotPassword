import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

describe('AuthLayoutRoutingModule', () => {
  let authLayoutRoutingModule: AuthLayoutRoutingModule;

  beforeEach(() => {
    authLayoutRoutingModule = new AuthLayoutRoutingModule();
  });

  it('should create an instance', () => {
    expect(authLayoutRoutingModule).toBeTruthy();
  });
});
