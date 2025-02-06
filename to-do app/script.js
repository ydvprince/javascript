// const input = document.getElementById("input");
// const addBtn = document.getElementById("addBtn");
// const itemList = document.getElementById("Item-list");

// function addItem(inputValue) {
//   const li = document.createElement("li");
//   const deleteBtn = document.createElement("button");
//   li.textContent = inputValue;
//   deleteBtn.textContent = "Delete";
//   li.appendChild(deleteBtn);
//   itemList.appendChild(li);

//   deleteBtn.addEventListener("click", () => {
//     itemList.removeChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   const inputValue = input.value.trim();
//   if (inputValue == "") {
//     alert("Please Enter Your Work");
//   }
//   addItem(inputValue);
//   input.value = "";
// });

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("Item-list");

function addItem(inputValue) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.textContent = inputValue;
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    itemList.removeChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue == "") {
    alert("Enter your work");
  }
  addItem(inputValue);
  input.value = "";
});
