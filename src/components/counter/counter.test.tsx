import {render,screen} from "@testing-library/react"
import user from "@testing-library/user-event"
import Counter from "./counter";


describe("Counter", ()=>{
    test("renders correctly", ()=>{
        render(<Counter/>);

        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole("button",{
            name : "Increment",
        })
        expect(incrementButton).toBeInTheDocument();
    });

    test("renders a count of 0", ()=> {
        render(<Counter/>)

        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })

    test("renders a count of 1 after clicking the increment button", async ()=>{ // user event is asynchronus event
        // user.setup(); // in video userevent was upgraded in package.json but i couldn't do that, so, showing error in user.setup()
        render(<Counter/>)
        const incrementButton = screen.getByRole("button",{
            name : "Increment",
        });

        await user.click(incrementButton)
        const countElementnt = screen.getByRole("heading");
        expect(countElementnt).toHaveTextContent("1")
    })

//-----------------------user.type() is used to get the typing of KEYBOARD in the number input field----------

    test("renders a count of 10 after clicking the set button", async ()=>{
        render(<Counter/>)
        const amountInput = screen.getByRole("spinbutton");
     await   user.type(amountInput, "10")
        expect(amountInput).toHaveValue(10);

        const setButton = screen.getByRole("button",{
            name: "Set",
        })

        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");

    })

    //------------testing tab KEY click event-------------------

    test("elements are focused in the right order", async ()=>{
        // user.setup();
        render(<Counter/>)
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button",{name: "Set"})
        const incrementButton = screen.getByRole("button", {name: "Increment"})
        await user.tab();
        expect(incrementButton).toHaveFocus();

        await user.tab();
        expect(amountInput).toHaveFocus();

        await user.tab();
        expect(setButton).toHaveFocus();
    })

})