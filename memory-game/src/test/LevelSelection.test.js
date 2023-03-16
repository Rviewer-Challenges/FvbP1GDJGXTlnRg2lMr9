import { render, screen } from '@testing-library/react';
import { GameProvider } from '../context/gameContext';
import { LevelSelection } from "./../components/levelSelection/LevelSelection"

describe('Level selection component', () => {
    let region;
    let list;
    beforeEach(() => {
        render(
            <GameProvider>
                <LevelSelection />
            </GameProvider>
        );
        region = screen.getByRole('region', { name: 'Level selection' });
        list = screen.getByRole('list');
    })

    test('Level selection is in document', () => {
        expect(region).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    });

});