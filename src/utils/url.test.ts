import { describe, expect, test } from 'vitest';

import { ASSET_VERSION } from '~/constants';
import { v } from './url';

describe('url utilities', async () => {
  test('v', async () => {
    // Would prefer to not use a variable (`ASSET_VERSION`), but we are not going to update the test every time the version changes.
    expect(v('hello')).toBe(`hello?v=${ASSET_VERSION}`);
    expect(v('/hello')).toBe(`/hello?v=${ASSET_VERSION}`);
    expect(v('hello.json')).toBe(`hello.json?v=${ASSET_VERSION}`);
    expect(v('/hello.json')).toBe(`/hello.json?v=${ASSET_VERSION}`);
    expect(v('hello/there.svg')).toBe(`hello/there.svg?v=${ASSET_VERSION}`);
    expect(v('/hello/there.svg')).toBe(`/hello/there.svg?v=${ASSET_VERSION}`);
    expect(v('hello/there.png')).toBe(`hello/there.png?v=${ASSET_VERSION}`);
    expect(v('/hello/there.png')).toBe(`/hello/there.png?v=${ASSET_VERSION}`);
  });
});
