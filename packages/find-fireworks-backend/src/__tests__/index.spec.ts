import { helloWorld } from '../index.js';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import type { Request, Response } from 'firebase-functions';

const response = { send: vi.fn() };

describe('helloWorld', () => {
  beforeAll(() => {
    helloWorld({} as Request, response as unknown as Response);
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  it('calls response.send', () => {
    expect(response.send).toHaveBeenCalledOnce();
  });

  it('returns expected response', () => {
    expect(response.send).toHaveBeenNthCalledWith(1, 'Hello from Firebase!');
  });
});
