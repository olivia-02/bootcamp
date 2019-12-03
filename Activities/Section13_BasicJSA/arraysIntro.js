window.setTimeout(function() {
//------------------------------
	var todos = ["Buy new turtle"];



	while(input !== "quit"){

		if(input === "list") {
			listTodos();
		} else if(input === "new") {
			newTodo();
		} else if (input === "delete") {
			deleteTodo();
		}
		var input = prompt("What would you like to do?");
	}

	console.log("Cool cool cool you quit. Noice.")


function listTodos() {console.log("-------------")
			todos.forEach(function(todo, i) {
				console.log(i + " : " + todo);
				console.log("-------------")
			});
		}
function newTodo() {
			var newTodo = prompt("Enter new list item");
					todos.push(newTodo);
					alert("New item made")
		}
function deleteTodo() {
			var index = prompt("Enter todo number to delete");
					todos.splice(index,1);
					alert("Item deleted");
		}


//------------------------------
}, 500);
