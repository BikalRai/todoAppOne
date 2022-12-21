// object selection
const addBtn = document.querySelector("#add_btn");
const addItem = document.querySelector("#add_item");
const list = document.querySelector("#list");
const errorMsg = document.querySelector("#error-msg");

//search elements
const searchEl = document.querySelector("#search");
const searchBtn = document.querySelector("#search__btn");

const creatEl = () => {
    // create list elements
    const listEl = document.createElement("li");

    // create span element
    const spanEl = document.createElement("span");

    // assigning value to span element
    spanEl.innerText = addItem.value;

    // creating edit button and assigning it a class
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    //creating delete button and assigning it a class
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "del";

    // checkbox creation and prepend it at in front
    const chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    listEl.prepend(chkBox);
    // appending span element to li element
    listEl.appendChild(spanEl);

    // appending del and edit button to li element
    listEl.appendChild(editBtn);
    listEl.appendChild(delBtn);

    return listEl;
};

const delFunc = function () {
    const liEl = this.parentNode;
    const ulEl = liEl.parentNode;
    ulEl.removeChild(liEl);
};

const editFunc = function () {
    const liEl = this.parentNode;
    const spanEl = liEl.querySelector("span");
    addBtn.innerText = "Update";
    addItem.value = spanEl.textContent;

    const ulEl = liEl.parentNode;
    ulEl.removeChild(liEl);
};

const eventHandler = function (listItem) {
    // selecting del button and setting functionality to delete button
    const delBtnEl = listItem.querySelector(".del");
    delBtnEl.onclick = delFunc;

    // selecting the edit button and setting functionality to edit button
    const editBtnEl = listItem.querySelector(".edit");
    editBtnEl.onclick = editFunc;
};

const editEvent = function () {
    const editBtnEl = document.querySelector(".edit");
    editBtnEl.addEventListener("click", function () {
        console.log();
    });
};

const addItems = () => {
    let item = creatEl();

    // list.appendChild(item);
    eventHandler(item);
    addBtn.innerText = "Add";

    if (addItem.value === null || addItem.value === "") {
        errorMsg.classList.remove("error");
    } else {
        list.appendChild(item);
        errorMsg.classList.add("error");
    }
    addItem.value = "";
};

addBtn.addEventListener("click", addItems);
