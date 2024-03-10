import React, { useState } from 'react';
import Select from 'react-select';
import './Profile.css';
import {Button} from '../Components/Button';
import Navbar from "../Components/Navbar";
import Input from '../Components/input';
const options = [
    {value: "travel", label: "Travel"},
    {value: "gaming", label: "Gaming"},
    {value: "environment", label: "Environment"},
    {value: "art", label: "Art"},
    {value: "sports", label: "Sports"},
    {value: "technology", label: "Technology"},
    {value: "health", label: "Health"},
]

function MultiSelectMenu() {

    // const { label, type, value } = objValue;
    const [formValues, setFormValues] = useState({});
    const handleChangeForm = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };





    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);   
    };

    const submit = ()=> (
        console.log(selectedOptions)
    )

    return (
        <div>
            <h5>First and Last name</h5>
            <input type="text" id="txtbox"></input>
            <input type="button" id="btn1" value="enter"></input>

            <p class="output" id="output1"></p>
            
        
            <h5>Interests and Hobbies</h5>

            {/* Dropdown */}
            <Select
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            isMulti={true} 
            />
  <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name || ""}
            onChange={handleChangeForm}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formValues.email || ""}
            onChange={handleChangeForm}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    </div>

    );
}

function Emojis() { 
return (
        <>
            <button onClick>🤪</button>
        </>
        
    ) 
}
export default function Profile() {
    return (
        <div>
            <Navbar buttonText="sign in"></Navbar>

            <div>
                <div>
                    <h1>Create Profile</h1>
                    <img src="./rizzsumo.png"></img>
                    <div class="flexbox-section">
                        <h2>Angela Li</h2>
                        <h3>Age</h3>
                        <h3>Located</h3>
                    </div>

                    <div class="flexbox-answer">
                        <h3>she/her/hers</h3>
                        <h3>19</h3>
                        <h3>Vancouver BC</h3>
                    </div>
                    
                    <div id="selectmenu"><MultiSelectMenu/></div>
                    <div id="selectmenu"><Emojis/></div>
                    <Button link='/matching'>Start your rizzsumo journey</Button>
                </div>
            </div>
            
        
        </div>
        
    );
}