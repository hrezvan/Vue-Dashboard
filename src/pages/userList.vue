<template>
  <div class="userList">
    <table class="userListTable">
      <thead>
        <tr>
          <th class="userListTH">ID</th>
          <th class="userListTH">User</th>
          <th class="userListTH">Status</th>
          <th class="userListTH">Transaction</th>
          <th class="userListTH">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="userListRow" v-for="item in items" :key="item.id">
          <th class="userListTH">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.status}}</td>
          <td>{{item.transaction}}</td>
          <td>
            <router-link to="/addUser">
              <button class="userListEdit">Edit</button>
            </router-link>
            <font-awesome-icon class='recycle' icon="trash" @click='handleDelete()' />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Mark Otto', status: 'active', transaction: '204 $' },
          { id: 2, name: 'Jacob Thornton', status: 'active', transaction: '330 $' },
          { id: 3, name: 'Larry Hughman', status: 'active', transaction: '185 $' },
          { id: 4, name: 'Danny Junior', status: 'active', transaction: '310 $' }
        ],
        message: 'There is no row!'
      }
    },
    methods: {
      handleDelete: function(index) {
        this.items.pop();
        // this.items.filter((x)=> x.id !== index);
        // delete this.items[index];
      }
    }
  }
</script>

<style scoped>
  .userList {
    flex: 4;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .userListTable {
    width: 100%;
    border-spacing: 10px;
    justify-content: center;
    margin: 20px;
  }
  .userListTH {
    text-align: left;
  }
  .userListRow {
    height: 40px;
  }
  .userListRow:hover {
    cursor: pointer;
  }
  .userListEdit {
    border-radius: 5px;
    background-color: green;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  .recycle {
    margin-left: 7px;
    width: 20px;
    color: red;
  }
</style>
