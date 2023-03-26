import { render, screen } from '@testing-library/react';
import { TimeCounter } from '../components/timeCounter/TimeCounter';
import { GameProvider } from '../context/gameContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCountDown } from './../hooks/useCountDown';

// describe('Time counter component', () => {
//     let article;
//     let timerCounter;

//     beforeEach(() => {
//         render(
//             <GameProvider>
//                 <TimeCounter />
//             </GameProvider>
//         );
//         article = screen.getByRole('article', { name: 'Time counter' });
//         timerCounter = screen.getByRole('timer');
//     })

//     test('Time counter is in document with value o 01:00', () => {
//         expect(article).toBeInTheDocument();
//         expect(timerCounter).toBeInTheDocument();
//         // expect(timerCounter.textContent).toBe(defaultTime);
//     });

// });



describe('useCountDown', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should initialize the time with default values', () => {
        const { result } = renderHook(() => useCountDown({ counter: 60 }));

        expect(result.current.time.minute).toBe('01');
        expect(result.current.time.second).toBe('00');
        expect(result.current.isActive).toBe(true);
    });

    it('should pause and restart the timer', () => {
        const { result } = renderHook(() => useCountDown({ counter: 60 }));

        act(() => {
            result.current.pause();
        });

        expect(result.current.isActive).toBe(false);

        act(() => {
            result.current.restart();
        });

        expect(result.current.isActive).toBe(true);
    });

    it('should stop the timer when the time is finished', () => {
        const { result } = renderHook(() => useCountDown({ counter: 2 }));

        expect(result.current.time.minute).toBe('00');
        expect(result.current.time.second).toBe('02');
        expect(result.current.timeFinished).toBe(false);
        expect(result.current.isActive).toBe(true);

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(result.current.time.minute).toBe('00');
        expect(result.current.time.second).toBe('00');
        expect(result.current.timeFinished).toBe(true);
        expect(result.current.isActive).toBe(false);
    });
});

