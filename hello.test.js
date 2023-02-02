describe("Random color test (with setup and tear-down)", function() {
    beforeEach(function () {

    });

    it('randomRGB returns a string with the correct format()', function () {

      let randomColor = randomRGB();

      expect(randomColor).toMatch(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);
    });

    it('randomRGB never returns the same colors()', function () {

        let firstCall = randomRGB();
        let secondCall = randomRGB();


        expect(firstCall).not.toEqual(secondCall);
      });

    afterEach(function() {

    });
  });
