import { render, screen } from '@testing-library/react';
import { Counter } from '../components/counter/Counter';
import { GameProvider } from '../context/gameContext';

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

    test('Level selection is in document with value 0', () => {
        expect(article).toBeInTheDocument();
    });

});