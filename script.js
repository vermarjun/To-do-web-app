// let counter = 0;
// REALLY BAD WAY TO DO DOM MANIPULATION
// This way it was done pre react era
// function Addto() {
    //     let data = inp.value;
    //     if (data!=""){
        //         let element = document.createElement('div');
        //         element.innerHTML = "<div id='"+counter+"'> <div class='itemHolder'> <p class='toDoitem'>"+data+"</p> <button class='btndstbn' onclick='Delete("+counter+")'> <img class='dstbin' src='https://th.bing.com/th/id/R.f1d02b4e59751fba384245ebf3c42688?rik=xMnkkxisjTQERA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_513596.png&ehk=gUYMqjE9AcyrMbJullahgYyLu0QYUGZPs0Gm%2f8%2bn4Nc%3d&risl=&pid=ImgRaw&r=0'></button></div></div>"
//         counter+=1;
//         list.appendChild(element)
//     }
// }
// function Delete(id){
//     let element = document.getElementById(`${id}`);
//     let parent = element.parentNode;
//     parent.removeChild(element);
// }

// Using state componenets and rendering to do same stuff:

// This todos arrays is state;
const list = document.querySelector('.toDoList');
const inp = document.querySelector('.input');
let todos = [];
function Addto(){
    todos.push(inp.value);
    render();
}

function Delete(index){
    todos.splice(index, 1);
    render();
}

// component
function component(data, id){
    const divEl = document.createElement("div");
    divEl.setAttribute("id", id);
    divEl.setAttribute("class", "todoitem");
    const spanEl = document.createElement("span");
    spanEl.textContent = data;
    spanEl.setAttribute("class", "todoitemtext");
    const buttonEl2 = document.createElement("button");
    buttonEl2.setAttribute("class", "todoitemdeletebtn");
    buttonEl2.addEventListener('click', ()=>{
        Delete(id);
    })
    buttonEl2.textContent = "Delete"
    divEl.append(spanEl);
    divEl.append(buttonEl2);
    document.querySelector(".toDoList").append(divEl);
}

// Rendering
function render(){
    const list = document.querySelector(".toDoList");
    list.innerHTML = "";
    for (let i = 0; i < todos.length; i++){
        component(todos[i], i);
    }
}