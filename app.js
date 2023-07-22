const buttons = document.querySelectorAll(".selection button");
const submitBtn = document.querySelector(".submit button");
const successMsg = document.querySelector(".success-top p");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
let value = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelected();
        value = e.target.textContent;
        e.target.classList.add("selected");
    })
})
submitBtn.addEventListener("click", (e) => {
    if (value != "") {
    successMsg.innerHTML = `You selected ${value} out of 5`
    container.classList.add("hide")
    success.classList.remove("hide")
    }
})
function removeSelected()
{
    buttons.forEach(btn => {
        btn.classList.remove("selected")
    })
}