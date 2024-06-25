var bar = document.querySelector('.list');
var x = document.querySelector('.cancel');

bar.addEventListener('click',()=>{
    document.querySelector('#ul').style.right='0';
    bar.style.display='none';
    x.style.display='block';
})


x.addEventListener('click',()=>{
    document.querySelector('#ul').style.right='-1000px';
    x.style.display='none';
    bar.style.display='block';
})
