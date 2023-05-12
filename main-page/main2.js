let addPersonIcon = document.querySelector('.addTask');
let sidebar = document.querySelector('.sidebar');
let i = 0;

addPersonIcon.addEventListener('click', function(){
    let divPerson = document.createElement('div');
    let imgElement = document.createElement('p');
    i++
    imgElement.textContent = `P${i}`
    divPerson.className = "adcTask"
    divPerson.appendChild(imgElement);
    sidebar.appendChild(divPerson);
    // console.log(divPerson);
    // console.log(imgElement);
})

