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

    test('counter is in document 0', () => {
        expect(article).toBeInTheDocument();
        // expect(article.firstchild).toHaveValue()
    });

});