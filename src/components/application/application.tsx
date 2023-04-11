import React from 'react'

const Application = () => {
  return (
    <>
    <h1>Job Application Form</h1>
    <h2>Section 1</h2>
    <p>All fields are mandatory</p>
    <span title='close'>X</span>
    <img src="https://www.lifeofpix.com/wp-content/uploads/2018/04/275-ake6418-jj-jite-001-1600x1000.jpg" alt="person with laptop" width="400px" />
    <div data-testid="custom-element">Custom Html Element</div>
   <form>
    <div>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        id='name' 
        placeholder='fullname'
        value= "Bahni"
        onChange={()=>{}}
        />
    </div>
    <div>  
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name='bio'/>
    </div>
    <div>
    <label htmlFor="job-location">Job location</label>
        {/* <label htmlFor="job-location">Name</label> */}
        <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
        </select>
    </div>
    <div>
        <label>
            <input type="checkbox" id='terms' />
            I agree to the terms & conditions
        </label>
    </div>
    <button>Submit</button>
   </form>
   </>
  )
}

export default Application
