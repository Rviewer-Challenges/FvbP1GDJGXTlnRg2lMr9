import { AnimalCards } from "../bd/AnimalCards";
import { duplicateArray } from "../utils/duplicateArray";

describe('Duplicate array', () => {
    const arr = AnimalCards;
    const arrLength = arr.length;

    test('returns array', () => {
        expect(Array.isArray(duplicateArray(arr))).toBe(true);
    });
    test('returns array of doble lenght', () => {
        expect(duplicateArray(arr).length).toBe(arrLength * 2);
    });

});