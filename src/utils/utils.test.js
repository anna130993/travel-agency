import { formatTime } from './formatTime';
import {promoPrice} from './promoPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime([])).toBe(null);
      expect(formatTime({})).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });

  describe('promoPrice', () => {
    it('should return null if there is no arg', () => {
      expect(promoPrice()).toBe(null);
    });

    it('should return null if promo is not a number', () => {
      expect(promoPrice(100, 'abc')).toBe(null);
      expect(promoPrice(20, () => {})).toBe(null);
    });

    it('should return null if price cannot be converted to number', () => {
      expect(promoPrice('abc', 20)).toBe(null);
      expect(promoPrice(() => {}, 20)).toBe(null);
    });

    it('should return null if any arg is lower than zero', () => {
      expect(promoPrice(-1, 20)).toBe(null);
      expect(promoPrice(1, -20)).toBe(null);
    });

    it('should return correct number when args are correct', () => {
      expect(promoPrice('100', 20)).toBe(80);
      expect(promoPrice('$100', 20)).toBe(80);
      expect(promoPrice(100, 70)).toBe(30);
    });
  });
});
