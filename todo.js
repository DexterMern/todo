let $ = document;
let todoText = $.querySelector(".input-todo");
let todoSection = $.querySelector(".div-todo-2");
let todoUl = $.querySelector(".todo-ul");

function Drop(event) {
  if (event.keyCode === 13) {
    if (todoText.value.length != 0) {
      let ul = $.createElement("ul");
      ul.className = "todo-ul";
      let div = $.createElement("div");
      div.className = "sub-div-todo";
      let li = $.createElement("li");
      li.className = "taskList";
      let i = $.createElement("i");
      i.className = "fa fa-trash";
      ul.appendChild(div);
      div.appendChild(li);
      div.appendChild(i);
      li.innerHTML = todoText.value;
      todoText.value = "";
      todoSection.appendChild(ul);
      i.addEventListener("click", function (event) {
        event.target.parentElement.remove();
      });
    }
  }
}

todoText.addEventListener("keyup", Drop);
