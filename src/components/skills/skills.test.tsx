import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", ()=>{
    const skills = ["HTML", "CSS", "JavaScript"]

    test("renders correctly", ()=>{
        render(<Skills skills={skills} />)

        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("renders a list of skills", ()=>{
        render(<Skills skills={skills}/>)
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    })

    test("renders Login button", ()=>{
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })

        expect(loginButton).toBeInTheDocument();
    })

    //--------------If want to check that if an element is not present in DOM then use queryByRole() or queryAllByRole() method

    test("Start Learning button is not rendered", ()=>{
        render(<Skills skills={skills}/>)
        const startLearningButton = screen.queryByRole("button",{
            name: "Start learning",
        })
        expect(startLearningButton).not.toBeInTheDocument();
    })

//--------FINDBYROLE: for ASYNC OPERATIONS like Start Learning button appears after 500ms, to handle thid type of situation findByRole or findAllByRole is used

// findByRole has a default wait time of 1000ms, if it takes more than 1000ms then it will require 3rd parameter that is TIMEOUT

    test("Start learning button is eventually displayed", async ()=>{ //async function
        render(<Skills skills={skills}/>);

// -----------------By using logroles we can visualise dom elements present in a structured manner in terminal--------------
    //    const view = render(<Skills skills={skills}/>);
    //    logRoles(view.container)
//----------------------------------------------------------------------------------------------------
        // screen.debug(); // for debugging it can be used
        const startLearningButton =await screen.findByRole("button", { // have to right await
            name: "Start learning",
        },
        { // this part is only needed if wait time is more than 1000ms
            timeout: 2000,
        }
        )
        // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    })
} )