import { render, screen } from '@testing-library/react';
import { LevelSelection } from "./../components/levelSelection/LevelSelection"

describe('Level selection component', () => {

    let article;
    beforeEach(() => {
        render(<LevelSelection />);
        article = screen.getByRole('article', { name: 'Select a level' });
    })

    test('Level selection is in document with value 0', () => {
        expect(article).toBeInTheDocument();
    });

});