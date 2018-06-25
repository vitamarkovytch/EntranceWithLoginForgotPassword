import { ForgottenPassRoutingModule } from './forgotten-pass-routing.module';

describe('ForgottenPassRoutingModule', () => {
  let forgottenPassRoutingModule: ForgottenPassRoutingModule;

  beforeEach(() => {
    forgottenPassRoutingModule = new ForgottenPassRoutingModule();
  });

  it('should create an instance', () => {
    expect(forgottenPassRoutingModule).toBeTruthy();
  });
});
