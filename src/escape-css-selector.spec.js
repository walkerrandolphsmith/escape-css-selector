import expect from 'expect';
import escapeCssSelector from './escape-css-selector';

describe('src/escape-css-selectors', () => {
    describe('Given a css selector containing a special character', () => {
        let selector;
        let expected;
        beforeEach(() => {
            selector = 'class:123';
            expected = 'class\\:123';
        });

        describe('When invoking the escapeCssSelector', () => {
            let actual;
            beforeEach(() => {
                actual = escapeCssSelector(selector);
            });

            it('should escape the special character', () => {
                expect(actual).toEqual(expected);
            });
        });
    });

    describe('Given a css selector containing a regular expression special character ', () => {
        let selector;
        let expected;
        beforeEach(() => {
            selector = 'class*123';
            expected = 'class\\*123';
        });

        describe('When invoking the escapeCssSelector', () => {
            let actual;
            beforeEach(() => {
                actual = escapeCssSelector(selector);
            });

            it('should escape the special regular expression character', () => {
                expect(actual).toEqual(expected);
            });
        });
    });
});