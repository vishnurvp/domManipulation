// // examine te document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'new Title';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getElementById

// console.log(document.getElementById('header-title'));
// const headertitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'Hello';
// headertitle.innerText = 'goodbye';

// header.style.borderBottom = 'solid 3px #000';

// const addItems = document.getElementsByClassName('title')[0];
// addItems.style.fontWeight = 'bold';
// addItems.style.color = 'green';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[1].textContent = 'Hello 2';

// items[2].style.backgroundColor = 'green';

// for (let i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';
// }


// const li = document.getElementsByTagName('li');
// // console.log(items);

// li[1].textContent = 'Hello 2';

// li[2].style.backgroundColor = 'green';

// for (let i=0; i<li.length; i++) {
//     li[i].style.fontWeight = 'bold';
//     li[i].style.color = 'red';
// }

// const a = document.getElementsByClassName('list-group')[0];
// console.log(a.lastElementChild);
// a.lastElementChild.textContent = 'Changed ItemName through class name';

// const b = document.getElementsByTagName('li')[4];
// b.style.backgroundColor ='blue';

const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input');
input.value = 'hello world';

const submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

const item = document.querySelector('.list-group-item');
item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';


// queryselectorall

const listItems = document.querySelectorAll('.list-group-item');
listItems[1].style.color = 'green';
console.log(listItems);
// console.log(titles);
let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

for (let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
    // even[i].style.backgroundColor = '#ccc';

}




