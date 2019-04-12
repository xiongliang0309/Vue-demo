<template>
  <div class="container">
    <div class="todolist">
      <h1>TodoList</h1>
      <hr>
      <form v-on:submit="addTodo">
        <input type="text" v-model="newTodo" class="content">
        <input type="submit" value="提交" class="submit">
      </form>
      <table border="1">
        <tr>
          <td class="choose">
            <input type="radio" name="chooseType" checked="true" @click="chooseList(1)">
            <label>所有目标</label>
            <input type="radio" name="chooseType" @click="chooseList(2)">
            <label>已完成目标</label>
            <input type="radio" name="chooseType" @click="chooseList(3)">
            <label>未完成目标</label>
          </td>
        </tr>
        <tr v-for="(todo,index) in filterlist" :key="todo.id">
          <td>
            <input type="checkbox" :value="todo.id" v-model="checklist">
            {{todo.content}}
            <button @click="deleteTodo(todo)" class="del">删除</button>
            <button
              class="complete"
              v-model="todo.status"
              @click="changeType(index)"
            >{{todo.status ? '标记未完成' : '标记已完成'}}</button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" @change="selectAll" v-model="isAll">
            <span>{{ isAll ? '取消全选' : '全选' }}</span>
            <button @click="deleteSelect" class="del">删除所选项</button>
          </td>
        </tr>
      </table>
      <span
        class="count"
      >共有{{this.todolist.length}}项任务，已完成{{this.todolist.filter(item=>item.status===true).length}}项，未完成{{this.todolist.length-this.todolist.filter(item=>item.status===true).length}}项</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      newTodo: "",
      todolist: [
        { id: 1, content: "HTML", status: false },
        { id: 2, content: "CSS", status: false },
        { id: 3, content: "Javascript", status: false }
      ],
      checklist: [], //已选择的todolist
      checkAll: [], //全选列表
      filterlist: [], // 渲染到页面的filterlist
      curType: 1,
      isAll: false
    };
  },
  created: function() {
    this.filterlist = this.todolist;
  },
  watch: {
    checklist: function() {
      if (this.checklist.length == this.todolist.length) {
        this.isAll = true;
      } else {
        this.isAll = false;
      }
    }
  },
  methods: {
    addTodo: function(e) {
      // console.log("hello");
      this.todolist.push({
        id: new Date().getTime(),
        content: this.newTodo,
        status: false
      });
      this.newTodo = "";
      e.preventDefault();
    },
    deleteTodo: function(todo) {
      if (confirm("确定删除这条todo吗？")) {
        this.todolist.splice(this.todolist.indexOf(todo), 1);
      }
      this.filterlist = this.todolist;
    },
    selectAll(e) {
      this.check = this.isAll === true ? this.checkAll : [];
    },
    //改变完成状态
    changeType(index) {
      this.filterlist[index].status = !this.filterlist[index].status;
      //更新数据
      this.chooseList(this.curType);
    },
    chooseList(type) {
      //type=1时，选择所有目标
      //type=2时，选择所有已完成目标
      //type=3时，选择所有未完成目标
      this.curType = type;
      this.filterlist = this.todolist;
      switch (type) {
        case 1:
          break;
        case 2:
          this.filterlist = this.todolist.filter(todo => todo.status == true);
          break;
        case 3:
          this.filterlist = this.todolist.filter(todo => todo.status == false);
          break;
      }
    },
    deleteSelect() {
      console.log(this.checklist);
      if (confirm("确定删除吗？")) {
        this.filterlist = this.todolist.filter(
          todo => !this.checklist.includes(todo.id)
        );
        this.todolist = this.filterlist;
        this.isAll = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 300px;
  margin-top: 100px;
  width: 800px;
  border-radius: 4px;
  border: 1px solid rgb(173, 172, 172);
}
.todolist {
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 30px;
}

h1 {
  margin-left: 200px;
}
.content {
  width: 480px;
  height: 36px;
  margin-top: 10px;
}
.submit {
  background: rgb(90, 181, 241);
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 1px;
  margin-left: 10px;
  margin-top: 10px;
}

table {
  border: 1px solid lightgray;
  width: 600px;
  height: 100%;
  margin-top: 20px;
}
.del {
  float: right;
  background: rgb(206, 62, 62);
  color: white;
}
.complete {
  float: right;
  background: lightgreen;
}
input,
button,
table,
tr,
td {
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}
.count {
  background: rgb(171, 206, 247);
}
</style>
