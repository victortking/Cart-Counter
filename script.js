let item = 0;

function increment() {
    item = item + 1
    console.log(item)
    document.getElementById("count-rel").innerText = item
}

function decrement() {
    item = item - 1
    console.log(item)
    document.getElementById("count-rel").innerText = item
}