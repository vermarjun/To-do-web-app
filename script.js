const list = document.querySelector('.toDoList');
const inp = document.querySelector('.input');
let counter = 0;
function Addto() {
    let data = inp.value;
    if (data!=""){
        let element = document.createElement('div');
        element.innerHTML = "<div id='"+counter+"'> <div class='itemHolder'> <p class='toDoitem'>"+data+"</p> <button class='btndstbn' onclick='Delete("+counter+")'> <img class='dstbin' src='https://th.bing.com/th/id/R.f1d02b4e59751fba384245ebf3c42688?rik=xMnkkxisjTQERA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_513596.png&ehk=gUYMqjE9AcyrMbJullahgYyLu0QYUGZPs0Gm%2f8%2bn4Nc%3d&risl=&pid=ImgRaw&r=0'></button></div></div>"
        counter+=1;
        list.appendChild(element)
    }
}
function Delete(id){
    let element = document.getElementById(`${id}`);
    let parent = element.parentNode;
    parent.removeChild(element);
}