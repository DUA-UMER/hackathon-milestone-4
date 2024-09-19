//listing of element//
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();
    //type Assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experianceElement = document.getElementById('experiance') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement){


        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experiance = experianceElement.value;
        const skills = skillsElement.value;
     
        //elements of picture
    const profilePictureFile = profilePictureInput. files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;
    


      //create resume output
       const resumeOutput = `
        <h2>resume</h2>
        ${profilePictureURL ? `<img src = "${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

        <h3>Education</h3>
        <p id="edit-education" class="editable" >${education}</p>
                             
        <h3>Experiance</h3>
        <p id="edit-experiance" class="editable" >${experiance}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable" >${skills}</p>
      `;

    


     //resume output display
        const resumeOutputElement = document.getElementById('resumeOutput');
        if(resumeOutputElement){
             resumeOutputElement.innerHTML = resumeOutput;
             makeEditable();
         }
     
    }else{
         console.error('one or more resumeOutput elements not found');
    }
});

//edit functionality

function makeEditable(){
    const editableElements = document.querySelectorAll('editable');
    editableElements.forEach(element =>{
        element.addEventListener('click', function(event){
            const currentElement = element as HTMLLinkElement;
            const currentValue = currentElement.textContent || "" ;

          //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
                  const input = document.createElement('input');
                  input.type = 'text';
                 input.value = currentValue;
                 input.classList.add('editing-input');
                 input.addEventListener('blur', function(event){
                     currentElement.style.display = 'inline';
                     currentElement.textContent = input.value;
                     input.remove();
                 })
                 currentElement.style.display = 'none';
                 currentElement.parentNode?.insertBefore(input, currentElement);
                 input.focus();
            }
        })
    })
}
