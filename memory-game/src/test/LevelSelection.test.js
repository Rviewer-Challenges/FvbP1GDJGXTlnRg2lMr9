import { render, screen } from '@testing-library/react';
import { GameProvider } from '../context/gameContext';
import { LevelSelection } from "./../components/levelSelection/LevelSelection"

describe('Level selection component', () => {
    let article;
    beforeEach(() => {
        render(
            <GameProvider>
                <LevelSelection />
            </GameProvider>
        );
        article = screen.getByRole('article', { name: 'Level selection' });
    })

    test('Level selection is in document with value 0', () => {
        expect(article).toBeInTheDocument();
    });

});