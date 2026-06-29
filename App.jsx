import React, { useState } from 'react';
import './App.css'; // CSS file ko import kar rahe hain

export default function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [letter, setLetter] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleJobChange = (e) => setJob(e.target.value);
  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleSkillsChange = (e) => setSkills(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    const myLetter = `Dear Hiring Manager at ${company},\n\nMy name is ${name} and I am applying for the ${job} role.\nI have good knowledge of these skills: ${skills}.\n\nThank you,\n${name}`;
    setLetter(myLetter);
  };

  const copyText = () => {
    navigator.clipboard.writeText(letter);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Cover Letter Maker</h1>
        <p className="subtitle">Generate professional cover letters in seconds.</p>
        
        <form onSubmit={submitForm} className="form-container">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. John Doe" value={name} onChange={handleNameChange} required />
          </div>

          <div className="input-group">
            <label>Job Role</label>
            <input type="text" placeholder="e.g. Frontend Developer" value={job} onChange={handleJobChange} required />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input type="text" placeholder="e.g. Google" value={company} onChange={handleCompanyChange} required />
          </div>

          <div className="input-group">
            <label>Key Skills</label>
            <input type="text" placeholder="e.g. React, JavaScript, CSS" value={skills} onChange={handleSkillsChange} required />
          </div>

          <button type="submit" className="primary-btn">Generate Letter</button>
        </form>

        {letter !== "" && (
          <div className="result-container">
            <div className="result-header">
              <h3>Your Cover Letter</h3>
              <button onClick={copyText} className="secondary-btn">Copy Text</button>
            </div>
            <div className="letter-output">
              {letter}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}