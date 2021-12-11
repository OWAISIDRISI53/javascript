let  button = document.getElementById("clickme");
let reset = document.getElementById("reset");
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = `Click me: ${count}`
};

reset.onclick = function(){
  count = 0;
button.innerHTML = `Click me: ${count}`

}

