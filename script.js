let input = document.getElementById('input');
let adbtn = document.getElementById('adbtn');
let list = document.getElementById('list');


adbtn.addEventListener('click' , () => {
    if(input.value.trim() !== ''){
    addItem(input.value);
    input.value = '';
}
});

input.addEventListener('keyup' , (e) =>{
  if(e.key ==='Enter' && input.value.trim() !== ''){
    addItem(input.value);
    input.value = '';
}
})

function addItem(text){
let listitem =  document.createElement('li');
listitem.innerHTML=
`<span>${text}</span>
<span class="del">+</span>`;

listitem.querySelector('.del').addEventListener('click' , function(){
  listitem.remove();
});
list.appendChild(listitem);
};







