var addPersonIcon = document.querySelectorAll('.addTask')

addPersonIcon.addEventListener('click', function (){
    var divPerson = document.createElement('div');
    var divPersonNode = document.createTextNode('Texto de teste');
    console.log(divPerson);
    console.log(divPersonNode);
})