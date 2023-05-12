var addPersonIcon = document.querySelector('.addTask');
var sidebar = document.querySelector('.sidebar');


addPersonIcon.addEventListener('click', function(){
    var divPerson = document.createElement('div');
    var imgElement = document.createElement('p');
    imgElement.textContent = "P1"
    divPerson.className = "adcTask"
    divPerson.appendChild(imgElement);
    sidebar.appendChild(divPerson);
    // console.log(divPerson);
    // console.log(imgElement);
})

