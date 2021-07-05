# demo-realtime-db-firebase-with-vanillajs

1. CRUD with firebase and vanilla JS

- menambahkan index.html dan main.js
- Setting project Firebase : add project -> click project name -> choose country region (default) -> copy firebase configuration to the project
- setting realtimedb firebase : create db -> change rule .read and .write to true
- create : saveTodo (firebase.database().ref().child('todos').push().set({todo: todo,done: false});)
- update : doneTodo (firebase.database().ref('todos/'+id).set({done: true, todo: todo});) and unDoneTodo (firebase.database().ref('todos/'+id).set({done: false, todo: todo});)
- delete : removeTodo (firebase.database().ref('todos/'+id).remove();)
