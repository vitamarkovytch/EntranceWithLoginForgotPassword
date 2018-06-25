import { RegistrationRoutingModule } from './registration-routing.module';

describe('RegistrationRoutingModule', () => {
  let registrationRoutingModule: RegistrationRoutingModule;

  beforeEach(() => {
    registrationRoutingModule = new RegistrationRoutingModule();
  });

  it('should create an instance', () => {
    expect(registrationRoutingModule).toBeTruthy();
  });
});
