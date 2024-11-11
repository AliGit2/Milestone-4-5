// Select elements
const resumeForm = document.getElementById("resumeForm");
const resumeDisplay = document.getElementById("resumeDisplay");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayPhone = document.getElementById("displayPhone");
const displayEducation = document.getElementById("displayEducation");
const displayInstitution = document.getElementById("displayInstitution");
const displayWorkExperience = document.getElementById("displayWorkExperience");
const displayCompany = document.getElementById("displayCompany");
const displayYears = document.getElementById("displayYears");
const displaySkills = document.getElementById("displaySkills");

// Form submission event handler
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const education = document.getElementById("education").value.trim();
    const institution = document.getElementById("institution").value.trim();
    const workExperience = document.getElementById("workExperience").value.trim();
    const company = document.getElementById("company").value.trim();
    const years = document.getElementById("years").value.trim();
    const skills = document.getElementById("skills").value.trim();

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
const editableFields = [
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
    field.addEventListener("click", function () {
        if (field.isContentEditable) {
            field.contentEditable = "false";
            field.style.backgroundColor = "transparent";
        } else {
            field.contentEditable = "true";
            field.style.backgroundColor = "#f0f8ff"; // Light blue for editing
        }
    });
});
