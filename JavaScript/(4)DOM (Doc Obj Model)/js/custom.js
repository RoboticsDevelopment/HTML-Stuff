console.log('Hello World!');

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
setInterval( runMe, 1000);