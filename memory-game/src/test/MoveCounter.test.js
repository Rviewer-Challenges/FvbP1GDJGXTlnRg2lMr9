import { render, screen } from '@testing-library/react';
import { MoveCounter } from "./../components/moveCounter/MoveCounter"

describe('MoveCounter component', () => {

    let article;
    beforeEach(() => {
        render(<MoveCounter />);
        article = screen.getByRole('article', { name: 'Movements' });
    })

    test('move counter is in document with value 0', () => {
        expect(article).toBeInTheDocument();
        expect(article.textContent).toBe('0');
    });

});