import { fr, en } from '../src';

describe('Locales', () => {
  it('FR', () => {
    expect(fr).toBeTruthy();
  });
  it('EN', () => {
    expect(en).toBeTruthy();
  });
});
