const ToDoItem = function(msg, priority){
this.msg = msg;
this.priority = priority;
this.completed = false;
}

ToDoItem.prototype.complete = function(){
  this.completed = true;
}


module.exports = ToDoItem;
