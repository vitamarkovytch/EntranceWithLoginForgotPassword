import { ForgottenPassModule } from './forgotten-pass.module';

describe('ForgottenPassModule', () => {
  let forgottenPassModule: ForgottenPassModule;

  beforeEach(() => {
    forgottenPassModule = new ForgottenPassModule();
  });

  it('should create an instance', () => {
    expect(forgottenPassModule).toBeTruthy();
  });
});
