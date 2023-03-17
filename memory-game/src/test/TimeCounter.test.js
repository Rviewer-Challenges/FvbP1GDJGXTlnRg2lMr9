import { render, screen } from '@testing-library/react';
import { TimeCounter } from '../components/timeCounter/TimeCounter';
import { GameProvider } from '../context/gameContext';

describe('Time counter component', () => {
    const time = "01:00"
    let article;
    let timer;

    beforeEach(() => {
        render(
            <GameProvider>
                <TimeCounter />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Time counter' });
        timer = screen.getByRole('timer');
    })

    test('Time counter is in document with value o 1:00', () => {
        expect(article).toBeInTheDocument();
        expect(timer).toBeInTheDocument();
        expect(timer.textContent).toBe(time);

    });

});