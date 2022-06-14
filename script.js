// // // examine te document object
// // console.dir(document);

// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title = 'new Title';
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // //document.all[10].textContent = 'Hello';
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);

// // getElementById

// // console.log(document.getElementById('header-title'));
// // const headertitle = document.getElementById('header-title');
// // const header = document.getElementById('main-header');
// // console.log(headertitle);
// // headertitle.textContent = 'Hello';
// // headertitle.innerText = 'goodbye';

// // header.style.borderBottom = 'solid 3px #000';

// // const addItems = document.getElementsByClassName('title')[0];
// // addItems.style.fontWeight = 'bold';
// // addItems.style.color = 'green';

// // const items = document.getElementsByClassName('list-group-item');
// // console.log(items);

// // items[1].textContent = 'Hello 2';

// // items[2].style.backgroundColor = 'green';

// // for (let i=0; i<items.length; i++) {
// //     items[i].style.fontWeight = 'bold';
// //     items[i].style.color = 'red';
// // }


// // const li = document.getElementsByTagName('li');
// // // console.log(items);

// // li[1].textContent = 'Hello 2';

// // li[2].style.backgroundColor = 'green';

// // for (let i=0; i<li.length; i++) {
// //     li[i].style.fontWeight = 'bold';
// //     li[i].style.color = 'red';
// // }

// // const a = document.getElementsByClassName('list-group')[0];
// // console.log(a.lastElementChild);
// // a.lastElementChild.textContent = 'Changed ItemName through class name';

// // const b = document.getElementsByTagName('li')[4];
// // b.style.backgroundColor ='blue';

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'hello world';

// const submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';


// // queryselectorall

// const listItems = document.querySelectorAll('.list-group-item');
// listItems[1].style.color = 'green';
// console.log(listItems);
// // console.log(titles);
// let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// // let even = document.querySelectorAll('li:nth-child(even)');

// for (let i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
//     // even[i].style.backgroundColor = '#ccc';

// }


// DOM Traversing

// const itemList = document.querySelector('#items');


// //parentNode
// // console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode);
// // console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
// // console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement);
// // console.log(itemList.parentElement.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes); //PITA

// // children
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // // firstChild
// console.log(itemList.firstChild);

// // // firstElementChild
// // console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// // console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling;
// // console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';



// // createElement

// // create a div
// const newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello1';

// // add attribute
// newDiv.setAttribute('title', 'hello Div');

// // create text node;
// const newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


// const ul = document.querySelector('.list-group');
// const newLi = document.createElement('li');
// newLi.className = 'list-group-item';
// newLi.textContent = 'Hello World';

// const item1 = ul.firstElementChild;

// ul.insertBefore(newLi, item1);



const form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);


// addItem
function addItem(e) {
    e.preventDefault();
    
    // get input value
    const newItem = document.getElementById('item').value;

    // create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';

    // add text node with input value;
    li.appendChild(document.createTextNode(newItem));
    // create delet button element;
    const delButton = document.createElement('button');
    // add classes to delButton
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    // append text
    delButton.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(delButton);
    // append li to itemlist
    itemList.appendChild(li);
}


function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('are you shure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


let listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);
for (let i=0; i<listItems.length; i++) {
    let edit = document.createElement('button');
    edit.className = "edit float-right";
    edit.appendChild(document.createTextNode('Edit'));
    listItems[i].appendChild(edit);
}