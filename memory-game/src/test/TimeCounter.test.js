import { render, screen } from '@testing-library/react';
import { TimeCounter } from '../components/timeCounter/TimeCounter';
import { GameProvider } from '../context/gameContext';

describe('Time counter component', () => {
    let article;
    beforeEach(() => {
        render(
            <GameProvider>
                <TimeCounter />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Time counter' });
    })

    test('Level selection is in document with value 0', () => {
        expect(article).toBeInTheDocument();
    });

});