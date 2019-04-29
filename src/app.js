import Vue from "vue";
const ToDoItem = require('./toDoItem.js');

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      intro: "Enter task here..",
      items: [new ToDoItem("Wash Car", false),new ToDoItem("Get Shopping", true), new ToDoItem("Walk Dog", false)],
      toDoMsg: "",
      toDoPriorityLOW: false,
      toDoPriorityHIGH: false
    },
    methods: {
      //Add to TODO list
      addToList: function (){
        if(this.toDoMsg){
          this.items.push(new ToDoItem(this.toDoMsg,this.toDoPriorityHIGH));
        }
      },

      //Set completed to true
      complete: function(index){
        this.items[index].complete();
      }
    }
  });

});
