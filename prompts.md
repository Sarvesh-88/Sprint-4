# Prompts Log - Sprint 4: Cover Letter Maker

To accelerate the development process and better understand React state management, template generation, and browser APIs, I utilized AI (Gemini) during this sprint. Below is the log of the prompts used:

## Prompt 1

**Tool Used:** Gemini

**Prompt:**
"How can I build a React form that collects Candidate Name, Job Role, Target Company, and Key Skills, and store all the input values efficiently using component state?"

**Help Received:**
Learned how to create controlled form inputs using `useState`, update state with `onChange` handlers, and organize the form data so it can be used later to generate the cover letter.

---

## Prompt 2

**Tool Used:** Gemini

**Prompt:**
"How do I generate a dynamic cover letter by inserting user input into a JavaScript template string without using an AI API?"

**Help Received:**
Understood how to use template literals (`${}`) to combine the user's name, company, job role, and skills into a professional cover letter template. Learned how to trigger the generation on form submission and display the result in the UI.

---

## Prompt 3

**Tool Used:** Gemini

**Prompt:**
"How can I add a 'Copy to Clipboard' button in React so users can copy the generated cover letter with one click?"

**Help Received:**
Learned how to use the browser Clipboard API (`navigator.clipboard.writeText()`), connect it to a button click event, and provide feedback after the text is successfully copied.
