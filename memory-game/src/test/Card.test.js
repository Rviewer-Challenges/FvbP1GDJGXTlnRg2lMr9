import { render, screen } from '@testing-library/react';
import { Card } from '../components/card/Card';
import { GameProvider } from '../context/gameContext';

describe('Time counter component', () => {
    let article;
    beforeEach(() => {
        render(
            <GameProvider>
                <Card />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Memory card' });
    })

    test('Level selection is in document with value 0', () => {
        expect(article).toBeInTheDocument();
    });

});