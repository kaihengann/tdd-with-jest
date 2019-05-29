const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
  describe('Irregular inputs', () => {
    it('should throw error if input non-integer', () => {
      const t = () => {
        findMultiples(2.5);
      }
      expect(t).toThrow();
    });
    it('should throw error if input negative integer', () => {
      const t = () => {
        findMultiples(-5,2);
      }
      expect(t).toThrow();
    });
    it('should throw error if input string', () => {
      const t = () => {
        findMultiples('hello');
      }
      expect(t).toThrow();
    });
  });

  describe('Regular test cases', () => {
    it('should return list including limit', () => {
      expect(findMultiples(5,20)).toEqual([5,10,15,20]);
    });
    it('should return all number up to limit', () => {
      expect(findMultiples(1,5)).toEqual([1,2,3,4,5]);
    });
  });
  // no multiples except base
  // 2 multiples
  // more than 2 multiples

  // multiple digits (20)
  // base = 1
  // limit is not multiple of base