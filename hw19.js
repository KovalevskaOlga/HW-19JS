const openBtn = document.querySelector(".open-button");
const closeBtn = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop");
const getBody = document.querySelector("body");
openBtn.addEventListener("click", (event) => {
  getBody.classList.add("show-modal");
});
closeBtn.addEventListener("click", (event) => {
  getBody.classList.remove("show-modal");
});
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    getBody.classList.remove("show-modal");
  }
});
// Task 3
const input1 = document.querySelector("#red");
const input2 = document.querySelector("#blue");
const input3 = document.querySelector("#green");

input1.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "red";
});

input2.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "blue";
});

input3.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "green";
});
// Task 4
const inpElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");
inpElem.addEventListener("input", (event) => {
  spanElem.textContent = event.target.value || "незнайомець";
});

const validInp = document.querySelector("#validation-input");
const attributeLength = Number(validInp.getAttribute("data-length"));
validInp.addEventListener("blur", (event) => {
  if (validInp.value.length === attributeLength) {
    validInp.classList.add("valid");
    validInp.classList.remove("invalid");
  } else {
    validInp.classList.add("invalid");
    validInp.classList.remove("valid");
  }
});
// Task 5
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  text.style.fontSize = fontSizeControl.value + "px";
});
