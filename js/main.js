//puts an event listener on the submit button.
document.querySelector('#clicker').addEventListener('click', addClick)

let count = 0

//function which increases # of clicks by 1 and renders in html.
function addClick() {    
    count++
    document.querySelector('#clickOutput').innerHTML = count
}