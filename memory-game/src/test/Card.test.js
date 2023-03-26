import { render, screen } from '@testing-library/react';
import { Card } from '../components/card/Card';
import { GameProvider } from '../context/gameContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCards } from '../hooks/useCards';

describe('Card component', () => {

    let article;
    beforeEach(() => {
        render(
            <GameProvider>
                <Card />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Memory card' });
    })

    test('card is in document', () => {
        expect(article).toBeInTheDocument();
    });

});



describe('useCards', () => {
    it('should return initial state', () => {
        const { result } = renderHook(() => useCards({ level: 1 }));
        expect(result.current.cards).toEqual([]);
        expect(result.current.cardsDisabled).toBe(false);
        expect(result.current.checkIfCardIsSelected(1)).toBe(false);
    });

    it('should handle choice correctly', () => {
        const { result } = renderHook(() => useCards({ level: 1 }));

        const card = {
            "name": "pelican",
            "id": 0.665457181263198
        };

        act(() => {
            result.current.handleChoice(card);
        });

        expect(result.current.choiceOne).toBe(card);

        // act(() => {
        //     result.current.handleChoice(card);
        // });

        // expect(result.current.choiceTwo).toBe(card);
    });

    // it('should check if card is selected correctly', () => {
    //     const { result } = renderHook(() => useCards({ level: 1 }));
    //     const card = { id: 1 };

    //     act(() => {
    //         result.current.handleChoice(card);
    //     });

    //     expect(result.current.checkIfCardIsSelected(card.id)).toBe(true);
    // });
});