<template>
    <div class="users">
        <div class="userTitleContainer">
            <h1 class="userTitle">Edit User</h1>
            <button class="userButton">Create</button>
        </div>
        <div class="userContainer">
            <div class="userShow">
                <div class="userShowTop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU" alt="userShowImg" class="userShowImg">
                    <div class="userShowTopTitle">
                        <span class="userShowUsername">Harry Thomas</span>
                        <span class="userShowUserTitle">Software Engineere</span>
                    </div>
                </div>
                <div class="userShowBottom">
                    <span class="userShowTitle">Account Details</span>
                    <div class="userShowInfo">
                        <font-awesome-icon class='userShowIcon' icon="user" />
                        <span class="userShowID">Harry_1999_Thomas</span>
                    </div>
                    <div class="userShowInfo">
                        <font-awesome-icon class='userShowIcon' icon="birthday-cake" />
                        <span class="userShowID">8.19.1999</span>
                    </div>
                    <div class="userShowInfo">
                        <font-awesome-icon class='userShowIcon' icon="phone" />
                        <span class="userShowID">+98123456789</span>
                    </div>
                    <div class="userShowInfo">
                        <font-awesome-icon class='userShowIcon' icon="envelope" />
                        <span class="userShowID">Harry_1999@domain.com</span>
                    </div>
                    <div class="userShowInfo">
                        <font-awesome-icon class='userShowIcon' icon="house-damage" />
                        <span class="userShowID">Tehran, Iran</span>
                    </div>
                </div>
            </div>
            <div class="userUpdate">
                <span class="userUpdateTitle">Edit</span>
                <div class="userUpdateForm">
                    <div class="userUpdateLeft">
                        <div class="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="username" class="userUpdateInput">
                        </div>
                        <div class="userUpdateItem">
                            <label>Full name</label>
                            <input type="text" placeholder="full name" class="userUpdateInput">
                        </div>
                        <div class="userUpdateItem">
                            <label>Email</label>
                            <input type="email" placeholder="name@domain.com" class="userUpdateInput">
                        </div>
                        <div class="userUpdateItem">
                            <label>Phone</label>
                            <input type="number" placeholder="1234567890" class="userUpdateInput">
                        </div>
                        <div class="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Tehran, Iran" class="userUpdateInput">
                        </div>
                    </div>
                    <div class="userUpdateRight">
                        <div class="userUpdateUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU" alt="userImg" class="userUpdateImg">
                            <label for="file">
                                <font-awesome-icon class='userUpdateIcon' icon="upload" />
                            </label>
                            <input type="file" id="file" />
                        </div>
                        <button class="userUpdateButton">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.users {
    flex: 4;
    padding: 20px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.userTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.userButton {
    width: 80px;
    cursor: pointer;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    font-size: 16px;
    border-radius: 5px;
}
.userContainer {
    display: flex;
    margin-top: 20px;
}
.userShow {
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px #706c6c;
    box-shadow: 0px 0px 15px -10px #6e6b6b;
}
.userUpdate {
    flex: 4;
    -webkit-box-shadow: 0px 0px 15px -10px #706c6c;
    box-shadow: 0px 0px 15px -10px #6e6b6b;
    margin-left: 20px;
}
.userShowTop {
    display: flex;
    align-items: center;
}
.userShowImg {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
}
.userShowTopTitle {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.userShowUsername {
    font-weight: 600;
}
.userShowUserTitle {
    font-weight: 300;
}
.userShowBottom {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.userShowInfo{
    margin-top: 15px;
}
.userShowInfo {
    display: flex;
}
.userShowID {
    margin-left: 10px;
}
.userUpdateLeft {
    margin-left: 20px;
}
.userUpdateImg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
}
.userUpdateTitle {
    font-size: 24px;
    font-weight: 600;
    margin-left: 20px;
}
.userUpdateItem {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.userUpdateItem>label {
    margin-bottom: 5px;
    font-size: 14px;
}
.userUpdateItem>input {
    border: none;
    width: 250px;
    border-bottom: 1px solid grey;
    height: 30px;
}
.userUpdateForm {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.userUpdateRight{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 40px;
}
.userUpdateUpload {
    display: flex;
    align-items: center;
}
.userUpdateIcon {
    cursor: pointer;
}
.userUpdateButton {
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    font-weight: 600;
    color: white;
}
#file {
    display: none;
}
</style>