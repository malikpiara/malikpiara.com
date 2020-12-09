document.querySelector('#dark').onclick = function() {
    document.body.classList.toggle("dark-mode");
}


var coll = document.getElementsByClassName("show-more");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.querySelector('#disappear').onclick = function() {
  var element = document.body;
  element.classList.toggle("disappear");
}

// newsletter

function getEmail() {
  let email = document.querySelector('#email').value;
  alert('Hello, ' + email);
}