// import {render, screen} from "@testing-library/react"
// import { AppProviders } from "../providers/app-providers"
import {render, screen} from "../../test-utils"
import { MuiMode } from "./mui-mode"


describe("MuiMode", ()=>{
    test("renders text correctly", ()=>{
        render(<MuiMode/>) // only this will cause testcase to fail as we have provider around this component 
        
//----- to make the above work either have to use wrapper as mentioned below or use test-utils import line no 3 instead of line number 1

        // render(<MuiMode/>, {
        //     wrapper: AppProviders
        // })

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})