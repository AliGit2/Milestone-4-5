// Select elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLElement;
const displayName = document.getElementById("displayName") as HTMLElement;
const displayEmail = document.getElementById("displayEmail") as HTMLElement;
const displayPhone = document.getElementById("displayPhone") as HTMLElement;
const displayEducation = document.getElementById("displayEducation") as HTMLElement;
const displayInstitution = document.getElementById("displayInstitution") as HTMLElement;
const displayWorkExperience = document.getElementById("displayWorkExperience") as HTMLElement;
const displayCompany = document.getElementById("displayCompany") as HTMLElement;
const displayYears = document.getElementById("displayYears") as HTMLElement;
const displaySkills = document.getElementById("displaySkills") as HTMLElement;

// Form submission event handler
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Get input values
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const education = (document.getElementById("education") as HTMLInputElement).value.trim();
    const institution = (document.getElementById("institution") as HTMLInputElement).value.trim();
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value.trim();
    const company = (document.getElementById("company") as HTMLInputElement).value.trim();
    const years = (document.getElementById("years") as HTMLInputElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

    // Simple validation
    if (!name || !email || !phone || !education || !institution || !workExperience || !company || !years || !skills) {
        alert("Please fill out all fields.");
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Update the display section
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayInstitution.textContent = institution;
    displayWorkExperience.textContent = workExperience;
    displayCompany.textContent = company;
    displayYears.textContent = years;
    displaySkills.textContent = skills;

    // Display the resume
    resumeDisplay.style.display = "block";
});

// Add editing capability to the displayed content
const editableFields: HTMLElement[] = [
    displayName,
    displayEmail,
    displayPhone,
    displayEducation,
    displayInstitution,
    displayWorkExperience,
    displayCompany,
    displayYears,
    displaySkills,
];

editableFields.forEach((field) => {
    field.addEventListener("click", () => {
        if (field.isContentEditable) {
            field.contentEditable = "false";
            field.style.backgroundColor = "transparent";
        } else {
            field.contentEditable = "true";
            field.style.backgroundColor = "#f0f8ff"; // Light blue for editing
        }
    });
});
