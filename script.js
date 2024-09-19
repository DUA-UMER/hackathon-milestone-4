var _a;
//listing of element//
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type Assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        //elements of picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;
        //create resume output
        var resumeOutput = "\n        <h2>resume</h2>\n        ".concat(profilePictureURL ? "<img src = \"".concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n                             \n        <h3>Experiance</h3>\n        <p id=\"edit-experiance\" class=\"editable\" >").concat(experiance, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n      ");
        //resume output display
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more resumeOutput elements not found');
    }
});
//edit functionality
function makeEditable() {
    var editableElements = document.querySelectorAll('editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function (event) {
                    currentElement.style.display = 'inline';
                    currentElement.textContent = input_1.value;
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
