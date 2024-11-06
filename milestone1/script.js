// get refrences to the form and display area 
var form = document.getElementById('resumeform');
var resumeDisplayElemants = document.getElementById('resume-display');
// Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent pagr reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // genrate the resume content dynamicly
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n      <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Phone:</b>").concat(phone, "</p>\n         \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n          <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n          <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // display the generated resume 
    if (resumeDisplayElemants) {
        resumeDisplayElemants.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display elements is missing.');
    }
});
