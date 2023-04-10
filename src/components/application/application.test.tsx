import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        //---------To know the roles: https://testing-library.com/docs/queries/byrole OR directly open https://www.w3.org/TR/html-aria/#docconformance

        //    const nameElement = screen.getByRole("textbox"); //  Here this will show error when one textarea added along with input text in application.tsx as type:text and textarea has same getByRole & that is textbox, so, will show error 
        //    expect(nameElement).toBeInTheDocument(); 

        //-------------------------------------------------------------------------------------------------------------------------

        const nameElement = screen.getByRole("textbox", { // now the problem mentioned in line 10 is solved
            name: "Name", // Name is what is written as lebel of the input text element is Name
        });
        expect(nameElement).toBeInTheDocument();

        //--------------The above thing with getByLabelText()---------------------

        const nameElement1 = screen.getByLabelText("Name"); // label's htmlfor attribute help in happening this
        expect(nameElement1).toBeInTheDocument();

        //-------IF THERE IS TWO LABEL ELEMENT WITH SAME NAME, SUPPOSE "Name" HERE for both the input and select (job location) THEN TO SOLVE THIS:

        //  const nameElement2 = screen.getByLabelText("Name",{
        //     selector : "input",
        // })

        //-----------------THE ABOVE THING with getByPlaceholderText()-------------------------------------

        const nameElement3 = screen.getByPlaceholderText("fullname");
        expect(nameElement3).toBeInTheDocument();

        //------------------------------------The above thing using getByDisplayValue()-------------------------------------------------

        const nameElement4 = screen.getByDisplayValue("Bahni");
        expect(nameElement4).toBeInTheDocument();


        //----------------------------------------------------------------------------------------------------------------------

        const bioElement = screen.getByRole("textbox", {
            name: "Bio",
        })
        expect(bioElement).toBeInTheDocument();
        // ---------------------------------------------------------------------------------------------------------------------

        //    const pageHeading = screen.getByRole("heading"); // only this will show error as h1 and h2 both have same role as heading
        const pageHeading = screen.getByRole("heading", {
            // name: "Job Application Form" // this can be used but h1 to h6 has a level thing to write
            level: 1, //denotes h1
        });
        expect(pageHeading).toBeInTheDocument();

        //---------------------------------------------------------------------------------------------------------------------------

        const sectionHeading = screen.getByRole("heading", {
            // name: "Section 1",
            level: 2, //denotes h2
        })
        expect(sectionHeading).toBeInTheDocument();

        //-------------------------------------IMPLEMENTATION OF getByText()----------------------------------------------------------------------

        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();

        // ---------------------------------IMPLEMENTATION OF getByTitle()------------------------------------------------------------------------------

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();

        // ------------------------------------------------------------------------------------------------------------
        //---------------Implementstion of getByAltText()----------

        const imageElement = screen.getByAltText("person with laptop");
        expect(imageElement).toBeInTheDocument();


        //--------------------------------Implementstion of getByTestId()---------------------------------------------------------

        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();

        //--------------------------------------------------------------------------------------------------------------

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
        //----------------------------------------------------------------------------------------------------------------

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement1 = screen.getByLabelText("I agree to the terms & conditions"); // though doesn't have htmlFor, then also work as it is wrapped by label
        expect(termsElement1).toBeInTheDocument();
        //------------------------------------------------------------------------------------------------------------------

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})