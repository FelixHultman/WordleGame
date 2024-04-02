import { jest, describe, expect, it } from '@jest/globals';

import fetchWordList from '../backend/fetchWordList';

describe('fetchWordList()', () => {
  it('Returns only words between 4 and 6 characters', async () => {
    const mockResponse = {
      ok: true,
      json: async () => {
        return {
          gigi: true,
          bomba: true,
          manboy: true,
          eneby: true,
          manchester: true,
        };
      },
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const output = await fetchWordList();
    const expectedOutput = ['gigi', 'bomba', 'manboy', 'eneby'];
    expect(output).toEqual(expectedOutput);
    output.forEach((word) => {
      expect(word.length).toBeGreaterThanOrEqual(4);
      expect(word.length).toBeLessThanOrEqual(6);
    });
  });

  it('gives an error if the wordlist fetch fails', async () => {
    const mockResponse = {
      hello: false,
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(fetchWordList()).rejects.toThrow('Failed to fetch word list');
  });
});
