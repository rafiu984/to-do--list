let input = document.getElementById('input');
let button = document.getElementById('button');
let paragraph = document.getElementById('paragraph');
let ul = document.getElementById('unord-list');




button.addEventListener('click', function() {
    let list;
    
    if(input.value ===''){
        input.style.border ='2px solid red';
        paragraph.innerHTML = 'enter a to do item';


        setTimeout(()=>{

            paragraph.innerHTML = '';
        },3000);

    }else{
        input.style.border = '2px solid green ';
        list = document.createElement('li');

        console.log(list);

        list.innerHTML = input.value;
        ul.appendChild(list);
        input.value = '';


        


   
    }

    list.addEventListener('click', function () {
        list.style.color = 'green';
        list.style.textDecoration = 'line-through'
    });

    list.addEventListener('dblclick',function () {
        list.style.display = 'none';
    })


})

