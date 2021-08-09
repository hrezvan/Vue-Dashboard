<template>
  <div class='sidebar'>
            <div class="sidebarWrraper">
                <div class="sidebarMenu">
                    <h3 class="sidebarTitle">Dashboard</h3>
                    <ul class="sidebarList">
                        <li class="sidebarListItem">
                            <router-link to="/home">
                                <font-awesome-icon class='sidebarIcon' icon="house-damage" />
                                Home
                            </router-link>
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="chart-pie" />
                            Analytics
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="chart-pie" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div class="sidebarMenu">
                    <h3 class="sidebarTitle">Quick Menu</h3>
                    <ul class="sidebarList">
                        <li class="sidebarListItem">
                            <router-link to='/users'>
                                <font-awesome-icon class='sidebarIcon' icon="user" />
                                Users
                            </router-link>
                        </li>
                        <li class="sidebarListItem">
                            <router-link to="/products">
                                <font-awesome-icon class='sidebarIcon' icon="shopping-bag" />
                                Products
                            </router-link>
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="dollar-sign" />
                            Transactions
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="sticky-note" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div class="sidebarMenu">
                    <h3 class="sidebarTitle">Notifications</h3>
                    <ul class="sidebarList">
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="envelope" />
                            Mail
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="comments" />
                            Feedback
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="paper-plane" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div class="sidebarMenu">
                    <h3 class="sidebarTitle">Staff</h3>
                    <ul class="sidebarList">
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="briefcase" />
                            Manage
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="chart-pie" />
                            Analytics
                        </li>
                        <li class="sidebarListItem">
                            <font-awesome-icon class='sidebarIcon' icon="info" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>

export default {
  // name: "app",
  data() {
    return {};
  },
};
</script>

<style>
.sidebar {
  flex: 1;
  background-color: rgb(250, 254, 255);
  height: (100vh - 50px);
  position: sticky;
  top: 50px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.sidebarWrraper {
  padding: 20px;
  color: #555;
}

.sidebarMenu {
  margin-bottom: 10px;
}

.sidebarTitle {
  font-size: 13px;
  color: rgb(150, 147, 147);
}

.sidebarList {
  list-style: none;
  padding: 5px;
}

.sidebarListItem {
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.sidebarListItem.active,
.sidebarListItem:hover {
  background-color: rgb(240, 240, 255);
}

.sidebarIcon {
  margin-right: 5px;
}

</style>
