import { AnimalCards } from "../bd/AnimalCards";
import { levels } from "../bd/Levels";
import { getCardsByLevel } from "../services/getCardsByLevel";
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

describe('getCardsByLevel', () => {
    const level1 = levels[0];
    const level2 = levels[1];
    const level3 = levels[2];

    test('returns array ', () => {
        expect(Array.isArray(getCardsByLevel(level1))).toBe(true);
    });
    test('returns array of level lenght level 1', () => {
        expect(getCardsByLevel(level1).length).toBe(level1.total);
    });
    test('returns array of level lenght level 2', () => {
        expect(getCardsByLevel(level2).length).toBe(level2.total);
    });
    test('returns array of level lenght level 3', () => {
        expect(getCardsByLevel(level3).length).toBe(level3.total);
    });
    test('returns array items with id', () => {
        const response = getCardsByLevel(level1);
        expect(typeof response[0].id).toBe("number");
    });

});