// Add JavaScript code here
const text = [
     {
         "id": "First",
         "type": "Featured",
         "title": "Challenge",
         "text": "Design an icon set with your favorite hobbies.",
         "details": "View Details",
         "icon": '<i class="fa-solid fa-chevron-right"></i>'
     },
     {
         "id": "Second",
         "type": "Blog",
         "title": "Interviews",
         "text": "8 examples of interviews with people who traveled through Europe.",
         "details": "Read post",
         "icon": '<i class="fa-solid fa-chevron-right"></i>'
     },
     {
         "id": "Third",
         "type": "Daily",
         "title": "Practice",
         "text": "Generate daily exercises to improve your skills.",
         "details": "Generate exercise",
         "icon": '<i class="fa-solid fa-chevron-right"></i>'
     }
 ];
 
 // Access the container element where the content will be inserted
 const container = document.getElementById('Container');
 
 // Iterate over the 'text' array and create HTML elements dynamically
 text.forEach(item => {
     // Create the necessary HTML elements
     const wrapper = document.createElement('div');
     const type = document.createElement('span');
     const title = document.createElement('span');
     const textContent = document.createElement('span');
     const detailsLink = document.createElement('button');
     const detailsLinkText = document.createElement('span');
     const detailsLinkTextIcon = document.createElement('span');
 
     // Add classes to the created elements
     wrapper.classList.add(item.id);
     type.classList.add('type');
     title.classList.add('title');
     textContent.classList.add('text');
     detailsLink.classList.add('details-link');
     detailsLinkText.classList.add('details');
     detailsLinkTextIcon.classList.add('right');
 
     // Set the content for the created elements
     type.textContent = item.type;
     title.textContent = item.title;
     textContent.textContent = item.text;
     detailsLinkText.textContent = item.details;
     detailsLinkTextIcon.textContent = item.icon;
 
     // Append the elements to the wrapper div
     wrapper.appendChild(type);
     wrapper.appendChild(title);
     wrapper.appendChild(textContent);
     wrapper.appendChild(detailsLink);
     detailsLink.appendChild(detailsLinkText);
     detailsLinkText.appendChild(detailsLinkTextIcon);
 
     // Append the wrapper div to the container element
     container.appendChild(wrapper);
 });