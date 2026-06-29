import React, { useState } from 'react';

export default function App() {
  
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");

  const [letter, setLetter] = useState("");

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

 
  const submitForm = (e) => {
    e.preventDefault();
    
    
    const myLetter = `Dear Hiring Manager at ${company},

My name is ${name} and I am applying for the ${job} role.
I have good knowledge of these skills: ${skills}. 

Thank you,
${name}`;

    setLetter(myLetter);
  };

 
  const copyText = () => {
    navigator.clipboard.writeText(letter);
    alert("Text copied to clipboard!");
  };

  return (
    <div>
      <h1>Cover Letter Maker</h1>
      
    
      <form onSubmit={submitForm}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <br />

        <div>
          <label>Job Role: </label>
          <input type="text" value={job} onChange={handleJobChange} required />
        </div>
        <br />

        <div>
          <label>Company: </label>
          <input type="text" value={company} onChange={handleCompanyChange} required />
        </div>
        <br />

        <div>
          <label>Skills: </label>
          <input type="text" value={skills} onChange={handleSkillsChange} required />
        </div>
        <br />

        <button type="submit">Generate Letter</button>
      </form>

      
      {letter !== "" && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h3>Generated Letter:</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{letter}</p>
          <button onClick={copyText}>Copy Text</button>
        </div>
      )}
    </div>
  );
}
