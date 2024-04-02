import { describe, expect, it } from '@jest/globals';

import wordFeedback from '../backend/wordFeedback';

describe('wordFeedback()', () => {
  // testar att en tom sträng ger en tom array
  it('Returns an empty array if input is an empty string', () => {
    const output = wordFeedback('');
    expect(output).toEqual([]);
  });
  // Testar att korrekt feedback ges om inga bokstäver stämmer överens med rätt ord
  it('If no letters matches the correct word, all letters give incorrect', () => {
    const output = wordFeedback('glows', 'handy');
    const expectedOutput = [
      { letter: 'g', color: 'red' },
      { letter: 'l', color: 'red' },
      { letter: 'o', color: 'red' },
      { letter: 'w', color: 'red' },
      { letter: 's', color: 'red' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Testar att korrekt feedback ges om alla bokstäver stämmer överens med rätt ord
  it('If all letters matches the correct word, all letters give correct', () => {
    const output = wordFeedback('hands', 'hands');
    const expectedOutput = [
      { letter: 'h', color: 'green' },
      { letter: 'a', color: 'green' },
      { letter: 'n', color: 'green' },
      { letter: 'd', color: 'green' },
      { letter: 's', color: 'green' },
    ];
    expect(output).toEqual(expectedOutput);
  });
  // Om en bokstav förekommer två gånger i gissning och svar ska rätt feedback ges för båda
  it('if one letter is used more than once in both guess and answer, it should return the right feedback for both', () => {
    const output = wordFeedback('hallå', 'cykla');
    const expectedOutput = [
      { letter: 'h', color: 'red' },
      { letter: 'a', color: 'yellow' },
      { letter: 'l', color: 'red' },
      { letter: 'l', color: 'green' },
      { letter: 'å', color: 'red' },
    ];
    expect(output).toEqual(expectedOutput);
  });
});
