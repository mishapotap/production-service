import { classNames } from './classNames';

describe('classNames', () => {
    test('Empty', () => {
        const expected = '';
        expect(classNames('')).toBe(expected);
    });
    test('Only main class', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });
    test('Additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('Additional class = undefined', () => {
        const expected = 'someClass class1';
        expect(classNames('someClass', {}, ['class1', undefined])).toBe(expected);
    });
    test('Mods only', () => {
        const expected = 'someClass hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true })).toBe(expected);
    });
    test('Additional class and mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('Additional class and falsy mod', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames('someClass', { hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('Additional class and undefined mod', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames('someClass', { hovered: undefined, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
});
