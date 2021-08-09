<template>
    <div class="newUser">
        <h1 class="newUserTitle">New User</h1>
        <form class="newUserForm">
            <div class="newUserItem">
                <label>Username</label>
                <input type='text' placeholder="John" />
            </div>
            <div class="newUserItem">
                <label>Full Name</label>
                <input type='text' placeholder="John Smith" />
            </div>
            <div class="newUserItem">
                <label>Email</label>
                <input type='email' placeholder="AAA@domain.com" />
            </div>
            <div class="newUserItem">
                <label>Passwords</label>
                <input type='password' placeholder="password" />
            </div>
            <div class="newUserItem">
                <label>Phone</label>
                <input type='number' placeholder="12345678900" />
            </div>
            <div class="newUserItem">
                <label>Address</label>
                <input type='text' placeholder="Street 45, Washington" />
            </div>
            <div class="newUserItem">
                <label>Gender</label>
                <div class="newUserGender">
                    <input type='radio' name="gender" id='male' value="male" />
                    <label for="male">Male</label>
                    <input type='radio' name="gender" id='female' value="female" />
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="newUserItem">
                <label>Active</label>
                <select class="newUserSelect" name='active' id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>            
        </form>
        <button class="newUserButton">Submit</button>
    </div>
</template>

<style scoped>
.newUser {
    flex: 4;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.newUserForm {
    display: flex;
    flex-wrap: wrap;
}
.newUserItem {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 10px;
}
.newUserItem>label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
}
.newUserItem>input {
    height: 20px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
}
.newUserGender>input {
    margin-top: 15px;
}
.newUserGender>label {
    margin: 10px;
    font-size: 18px;
    color: rgb(121, 117, 117);
}
.newUserSelect {
    height: 40px;
    border-radius: 5px;
}
.newUserButton {
    margin-top: 10px;
    width: 200px;
    background-color: darkblue;
    color:white;
    border: none;
    padding: 7px 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>