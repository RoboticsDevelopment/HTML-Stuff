/*console.log('Hello World!');

var images = document.getElementsByTagName('img');
console.log(images);

var anchors = document.getElementsByTagName('a');
console.log(anchors);

var phrase = document.getElementsByTagName('p');
console.log(phrase);

var heading = document.getElementById('heading');
console.log(heading.innerHTML);
console.log(heading.nodeType);

var main_content = document.getElementById('main_content');
main_content.setAttribute('align', 'center');

var heading = document.getElementById('heading');
heading.innerHTML = "Alien AI Technology 777";

var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = "Another Alien AI Title";
new_phrase.innerHTML = "More Cool Text";

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);

var button2 = document.getElementById('myButton');

button2.onclick = function()
{
    alert('Hello World!');
    alert('Bye World');
};

function runMe()
{
    alert( 'Simple Message');
}

//setTimeout( runMe, 3000);
//setInterval( runMe, 1000);
*/


var u_name = document.myForm.u_name,
    u_pass = document.myForm.u_pass,
    userName = "PatrickByrne",
    passWord = "123";

function runMe2() {
    u_name.value == userName && u_pass.value == passWord ? console.log("Login Success") : console.log("Login Error")
}
var u_name = document.myForm.u_name,
    message = document.getElementById("message");

function runMe() {
    u_name.value.length < 3 ? (message.innerHTML = "Needs more characters!", message.style.color = "red", u_name.style.backgroundColor = "Red", u_name.style.color = "White") : u_name.value.length > 10 ? (message.innerHTML = "Limit has been reached", message.style.color = "red", u_name.style.backgroundColor = "Red", u_name.style.color = "White") : (message.innerHTML = "Nice! OK!", message.style.color = "green", u_name.style.backgroundColor = "Green", u_name.style.color = "White")
}
