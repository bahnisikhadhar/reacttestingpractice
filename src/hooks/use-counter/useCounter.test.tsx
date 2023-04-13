// To test custom hooks
 import {renderHook,act} from '@testing-library/react';
 import { useCounter } from './useCounter';

 describe("useCounter", ()=>{
    test("should render the initial count", ()=>{
        const {result} = renderHook(useCounter) // renderHook has a property called result which we are destructuring here
        expect(result.current.count).toBe(0); // result's current property returns all the value of a custom hook
        // if 1 is given in place of 0 then error will be shown
    })

    test("should accept and render the same initial count", ()=>{
        const {result} = renderHook(useCounter, {
            initialProps : {
                initialCount: 10,
            },
        })
        expect(result.current.count).toBe(10);
    })

    test("should increment the count", ()=>{
        const {result} = renderHook(useCounter);

//-----------------------USE OF act(), if there is any state change, then to test it, it must be wrapped with act(), otherwise will show error

        act(() => result.current.increment()); 

        expect(result.current.count).toBe(1);
    })

    test("should increment the count", ()=>{
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement()); 

        expect(result.current.count).toBe(-1);
    })
 })