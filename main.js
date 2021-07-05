// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2PDIBVbMS25qwdJ8-LWSCp5AsNxe36Pw",
    authDomain: "todolist-d28f6.firebaseapp.com",
    projectId: "todolist-d28f6",
    storageBucket: "todolist-d28f6.appspot.com",
    messagingSenderId: "476172649360",
    appId: "1:476172649360:web:01826b912a1a9eba74a915"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var todoRef = firebase.database().ref().child('todos');

  var todoList = document.getElementById('todoList');

  todoRef.on('value', function (todos) {
      var temp = '';
      todos.forEach(function (todo) {
          var todoItem = todo.val();
          if(!todoItem.done){
            temp += '<p><label class=\'undone\'>' + todoItem.todo + '</label> <button onclick=\'doneTodo(\"'+todo.key+'"\,\"'+todoItem.todo+'\")\'>Done</button> </p>';
          } else {
            temp += '<p><label class=\'done\'>' + todoItem.todo + '</label> <button onclick=\'unDoneTodo(\"'+todo.key+'"\,\"'+todoItem.todo+'\")\'>Undone</button> <button onclick=\'removeTodo(\"'+todo.key+'\")\'>remove</button></p>';
          }
           
      });
    //   console.log(temp);
      todoList.innerHTML = temp;
  });


  document.getElementById("myForm").addEventListener('submit',submitForm);

  function submitForm(e) {
      e.preventDefault();

      var todo = document.getElementById('txtTodo').value;

      saveTodo(todo);

    //   console.log("Submit Form");

    document.getElementById('myForm').reset();
  }

  function saveTodo(todo) {
      var newTodo = todoRef.push();
      newTodo.set({
          todo: todo,
          done: false
      });
  }

  function doneTodo(id, todo) {
      firebase.database().ref('todos/'+id).set({done: true, todo: todo});
  }

  function unDoneTodo(id, todo) {
    firebase.database().ref('todos/'+id).set({done: false, todo: todo});
}

function removeTodo(id) {
    firebase.database().ref('todos/'+id).remove();
}