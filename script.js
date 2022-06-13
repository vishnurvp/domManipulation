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


const li = document.getElementsByTagName('li');
// console.log(items);

li[1].textContent = 'Hello 2';

li[2].style.backgroundColor = 'green';

for (let i=0; i<li.length; i++) {
    li[i].style.fontWeight = 'bold';
    li[i].style.color = 'red';
}

const a = document.getElementsByClassName('list-group')[0];
console.log(a.lastElementChild);
a.lastElementChild.textContent = 'Changed ItemName through class name';

const b = document.getElementsByTagName('li')[4];
b.style.backgroundColor ='blue';



