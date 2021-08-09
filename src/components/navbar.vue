<template>
  <div class='topbar'>
    <div class='topbarWrapper'>
      <div class='topLeft'>
        <span class='logo'>Admin</span>
      </div>
      <div class='topRight'>
        <div class='topbarIconContainer'>
          <font-awesome-icon class='topIcon' icon="bell" />
          <span class="topIconBadge">2</span>
        </div>
        <div class='topbarIconContainer'>
          <font-awesome-icon class='topIcon' icon="globe" />
          <span class="topIconBadge">2</span>
        </div>
        <div class='topbarIconContainer'>
          <font-awesome-icon class='topIcon' icon="wrench" />
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU' alt='' class='topAvatar' />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.topbar {
  width: 100%;
  height: 50px;
  background-color: rgb(223, 238, 227);
  position: sticky;
  z-index: 999;
}

.topbarWrapper {
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family:monospace;
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
}

.topRight {
  display: flex;
  justify-content: center;
}

.topbarIconContainer {
  position: relative;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
}

.topIconBadge {
  position: absolute;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  top: -5px;
  right: 5px;
  border-radius: 50%;
  color: white;
  font-size: 10px;
}

.topAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 5px;
}

.topIcon {
  height: 20px;
  width: 20px;
  /* margin-top: 5px; */
}

</style>
