let firstTask = document.getElementById("firstblock_firsttask");

let colors = ["blue", "red", "green", "pink"]

firstTask.onclick = () =>
{
    firstTask.style.color = colors[Math.floor(Math.random()*4)];
    firstTask.style.fontSize = Math.floor(Math.random() * 100 + 20) + "px";
}

let image = document.getElementById("image");

let timer = setInterval(() =>
{
    image.style.left = Math.random()*(document.body.clientWidth - image.style.width) + "px";
    image.style.top = Math.random()*(document.body.clientHeight - image.style.height) + "px";
}, 1000);

{
    let ppp = document.getElementsByTagName("p");
    
    for (let i = 0; i < ppp.length; i++)
    {
        ppp[i].setAttribute("style","font-size:15px;");
    }
}

{
    currentTime();
}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " ;
  
    document.getElementById("timer").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}

let hintHead = document.getElementById("hint-head");

let hint;

hintHead.onclick = (event) =>
{
    if(hint != null) return;
    let target = event.target

    hint = document.createElement("div");
    hint.className = "tooltip";
    hint.innerHTML = hintHead.dataset.tooltip;
    hint.style.fontSize = "30px"
    document.body.append(hint);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - hint.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - hint.offsetHeight;
    if (top < 0)
    { 
        top = coords.top + target.offsetHeight + 5;
    }

    hint.style.left = left + 'px';
    hint.style.top = top + 'px';
}

// let body = document.getElementsByTagName('body');
window.onclick = (e) =>
{
    if (hint == null) return;
    if (e.target == hintHead) return;
    if (e.target == hint) return;

    hint.remove();
    hint = null;
}

let colorRects = document.getElementsByClassName("rect");
let rightRect = document.getElementsByClassName("rightrect");

for (let i = 0; i < colorRects.length; i++)
{
    colorRects[i].onclick = (e) => 
    {
        let target = e.target;

        let color = target.dataset.color;
        rightRect[0].style.backgroundColor = String(color);
    }   
}





