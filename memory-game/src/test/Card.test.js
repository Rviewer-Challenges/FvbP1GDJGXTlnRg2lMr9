import { render, screen } from '@testing-library/react';
import { Card } from '../components/card/Card';
import { GameProvider } from '../context/gameContext';

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