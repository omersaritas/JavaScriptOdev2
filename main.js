//  Create new list item, alert on empty bar when clicked

function newElement(){
    var li = document.createElement("li");
    var Task = document.getElementById("task").value
    var T = document.createTextNode(Task);
    li.appendChild(T);
    if ( Task.trim().length === 0) {
        showSnackbarErr();
    } else {
        document.getElementById("list").appendChild(li);
        showSnackbarSuccess();
    }  
    document.getElementById("task").value = "";

    var span = document.createElement("SPAN")
    var text = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(text)
    li.appendChild(span);
    const currentDate = new Date();

    for ( i = 0; i < close.length; i++ ) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Alert function

function showSnackbarSuccess() {
    let a = document.getElementById("snackbarSuccess");
    a.className = "show";
    setTimeout(() => {
        a.className = a.className.replace("show", "");
    }, 3000)
}
function showSnackbarErr() {
    let b = document.getElementById("snackbarErr");
    b.className = "show";
    setTimeout(() => {
        b.className = b.className.replace("show", "");
    }, 3000)
}


// Create a "close" function

var myNodelist = document.getElementsByTagName("LI");
var i ;
for ( i = 0 ; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i ;
for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.stye.display = "none";
    }
}

// Checked Info

var list = document.querySelector("ul")
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

// Local Storage

let item = localStorage.getItem('LI') ? localStorage.getItem('LI') : 0
let itemDOM = document.querySelector('#LI')
let increaseDOM = document.querySelector('#task')

itemDOM.innerHTML = list

increaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase" ? item += 1 : item -=1
    localStorage.setItem('item', item)
    itemDOM.innerHTML = item
}