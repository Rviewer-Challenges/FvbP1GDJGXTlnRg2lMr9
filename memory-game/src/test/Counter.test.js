import { render, screen } from '@testing-library/react';
import { Counter } from '../components/counter/Counter';
import { GameProvider } from '../context/gameContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../hooks/useCounter';

describe('Counter component', () => {
    let article;
    beforeEach(() => {
        render(
            <GameProvider>
                <Counter />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Counter' });
    })

    test('counter is in document ', () => {
        expect(article).toBeInTheDocument();
    });

});


test('should increment counter from custom initial value', () => {
    const { result } = renderHook(() => useCounter(1))

    act(() => {
        result.current.increment()
    })

    expect(result.current.counter).toBe(2)
})



