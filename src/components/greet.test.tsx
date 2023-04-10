//Greet should render the text hello and if a name is passed into the component, it should render hello followed bt the name 

import { render, screen } from "@testing-library/react";
import Greet from "./greet/greet";

//------------------------------------WITHOUT DESCRIBE 2 TESTS-----------------------------------

// test("Greet renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello"); // will pass test cases

//     // const textElement = screen.getByText("hello"); // will show error

//     // const textElement = screen.getByText(/hello/i); // now the test will pass, here used regex and said ignore all cases(lower or upper)

//     expect(textElement).toBeInTheDocument();
// })

// test("Greet renders with a name", () => { //can use test.only to show only that test or test.skip to skip that test
//     render(<Greet name="Bahni" />)
//     const textElement = screen.getByText("Hello Bahni");
//     expect(textElement).toBeInTheDocument();
// })

//-----------------------------------WITH DESCRIBE METHOD 2 TEST CASES GROUPED TOGETHER-----------------

//Describe also can have .only and .skip
// We also can have multiple describes in a single file/Test suites(shown in terminal, Test suites means file)

// describe("Greet", ()=>{  // describe is used to group tests together and now in individual test name we can remove Greet as it is already grouped by greet so, easy to identify
//     test(" renders correctly", () => {
//         render(<Greet />);
    
//         const textElement = screen.getByText("Hello"); 
//         expect(textElement).toBeInTheDocument();
//     })
    
//     test(" renders with a name", () => { 
//         render(<Greet name="Bahni" />)
//         const textElement = screen.getByText("Hello Bahni");
//         expect(textElement).toBeInTheDocument();
//     })
// })

//---------------------------------------NESTED DESCRIBE WITH 2 TESTS--------------------------------

describe("Greet", ()=>{  // describe is used to group tests together and now in individual test name we can remove Greet as it is already grouped by greet so, easy to identify
    test(" renders correctly", () => {
        render(<Greet />);
    
        const textElement = screen.getByText("Hello"); 
        expect(textElement).toBeInTheDocument(); // toBeInTheDocument() is a matcher function
        //--------https://jestjs.io/docs/using-matchers -> VISIT THIS LINK TO KNOW ABOUT OTHER MATCHER FUNCTIONS------

        //-------------FOR A LIST OF MATCHER FUNCTIONS, VISIT JEST DOM GITHUB (https://github.com/testing-library/jest-dom)-------------------
    })
    
    describe("Nested",()=>{
        test(" renders with a name", () => { 
            render(<Greet name="Bahni" />)
            const textElement = screen.getByText("Hello Bahni");
            expect(textElement).toBeInTheDocument();
        })
    })
   
})