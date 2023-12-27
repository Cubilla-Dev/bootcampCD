
const p = document.querySelector(".text_like");
count = 3;
function like(){
    count += 1;
    console.log(count)
    p.textContent = count + " like(s)";}