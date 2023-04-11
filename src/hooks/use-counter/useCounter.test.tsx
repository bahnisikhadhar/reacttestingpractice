// To test custom hooks
 import {renderHook} from '@testing-library/react';
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
 })