
const canti_compras = document.getElementById("cantidad");
count = 0;
function Buy(){
    count += 1;
    console.log(count)
    canti_compras.textContent = count;
}

function funcAlert(){
    alert('This game is supported on Linux')
}