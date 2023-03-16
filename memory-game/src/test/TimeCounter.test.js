import { render, screen } from '@testing-library/react';
import { TimeCounter } from '../components/timeCounter/TimeCounter';
import { GameProvider } from '../context/gameContext';

describe('Time counter component', () => {
    const time = "01:00"
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

    // test('Level selection is in document with value 1:00', () => {
    //     expect(article).toHaveTextContent(time);
    // });

});