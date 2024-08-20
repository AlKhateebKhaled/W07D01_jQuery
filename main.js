console.log("20/8/2024");
console.log($);
console.log(jQuery);
console.log($());

// **************************** Q2 ****************************

/*
const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);
*/

// **************************** Q3 ****************************

/*
const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
*/

// **************************** Q4 ****************************

/*
const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const renderList = () => {
  toDos.forEach((element) => {
    const li = $(`<li>${element}</li>`);
    ul.append(li);
    renderList();
      })  
};
renderList();
*/

// **************************** Q5 ****************************

/*
const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const renderList = () => {
  ul.empty();
  toDos.forEach((element) => {
    const li = $(`<li>${element}</li>`);
    ul.append(li);
    renderList();
      })  
};

renderList();

const btn = $(`<button>addToList<button>`);
body.append(btn);

const input = $(`<input>`);
body.append(input);

btn.on("click", () => {
  const newTodo = input.val();
  toDos.push(newTodo);
  renderList();
});
*/

// **************************** Q6 ****************************

/*
const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const renderList = () => {
  ul.empty();
  toDos.forEach((element, index) => {
    const li = $(`<li>${element}</li>`);
    const deletBtn = $(`<button>delete</button>`);
    li.append(deletBtn);
    ul.append(li);
    deletBtn.on("click", () =>{
        toDos.splice(index,1)
        renderList();
      })  
});
};

renderList();

const btn = $(`<button>addToList<button>`);
body.append(btn);

const input = $(`<input>`);
body.append(input);

btn.on("click", () => {
  const newTodo = input.val();
  toDos.push(newTodo);
  renderList();
});
*/

// **************************** Q7 ****************************

const body = $("body");
const header1 = $(`<h1>Todo List</h1>`);
const ul = $(`<ul></ul>`);
body.append(header1);
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
const renderList = () => {
  ul.empty();
  toDos.forEach((element, index) => {
    const li = $(`<li>${element}</li>`);
    const deletBtn = $(`<button>delete</button>`);
    const updateBtn = $(`<button>update</button>`);
    li.append(deletBtn);
    li.append(updateBtn);
    ul.append(li);
    deletBtn.on("click", () => {
      toDos.splice(index, 1);
      renderList();
    });
    updateBtn.on("click", () => {
      toDos.splice(index, 1, input.val());
      renderList();
    });
  });
};

renderList();

const btn = $(`<button>addToList<button>`);
body.append(btn);

const input = $(`<input>`);
body.append(input);

btn.on("click", () => {
  const newTodo = input.val();
  toDos.push(newTodo);
  renderList();
});
