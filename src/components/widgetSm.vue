<template>
    <div class="widgetSm">
        <span class="widgetSmTitle">New Join Members</span>
        <ul class="widgetSmList">
            <li class="widgetSmListItem">
                <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" class="widgetSmImg">
                <div class="widgetSmUser">
                    <span class="widgetSmUsername">Lisa Kordow</span>
                    <span class="widgetSmJob">Frontend Developer</span>
                </div>
                <button class="widgetSmButton">
                    <font-awesome-icon class='widgetSmIcon' icon="eye" />
                    Display
                </button>
            </li>
            <li class="widgetSmListItem">
                <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" class="widgetSmImg">
                <div class="widgetSmUser">
                    <span class="widgetSmUsername">Lisa Kordow</span>
                    <span class="widgetSmJob">Frontend Developer</span>
                </div>
                <button class="widgetSmButton">
                    <font-awesome-icon class='widgetSmIcon' icon="eye" />
                    Display
                </button>
            </li>
            <li class="widgetSmListItem">
                <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" class="widgetSmImg">
                <div class="widgetSmUser">
                    <span class="widgetSmUsername">Lisa Kordow</span>
                    <span class="widgetSmJob">Frontend Developer</span>
                </div>
                <button class="widgetSmButton">
                    <font-awesome-icon class='widgetSmIcon' icon="eye" />
                    Display
                </button>
            </li>
            <li class="widgetSmListItem">
                <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" class="widgetSmImg">
                <div class="widgetSmUser">
                    <span class="widgetSmUsername">Lisa Kordow</span>
                    <span class="widgetSmJob">Frontend Developer</span>
                </div>
                <button class="widgetSmButton">
                    <font-awesome-icon class='widgetSmIcon' icon="eye" />
                    Display
                </button>
            </li>
            <li class="widgetSmListItem">
                <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" class="widgetSmImg">
                <div class="widgetSmUser">
                    <span class="widgetSmUsername">Lisa Kordow</span>
                    <span class="widgetSmJob">Frontend Developer</span>
                </div>
                <button class="widgetSmButton">
                    <font-awesome-icon class='widgetSmIcon' icon="eye" />
                    Display
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.widgetSm {
    flex: 1;
    -webkit-box-shadow: 0px 7px 18px -8px #000000;
    box-shadow: 0px 7px 18px -8px #000000;
    padding: 20px;
    margin-right: 20px;
    border-radius: 5px;
}
.widgetSmTitle{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 900;
}
.widgetSmImg {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
}
.widgetSmList {
    list-style: none;
    margin: 0;
    padding: 0;
}
.widgetSmListItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}
.widgetSmUser {
    display: flex;
    flex-direction: column;
}
.widgetSmUsername {
    font-weight: 600;
}
.widgetSmJob {
    font-weight: 300;
}
.widgetSmButton {
    border-radius: 10px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 7px 10px;
    border: none;
    cursor: pointer;
}
.widgetSmIcon {
    margin-right: 5px;
}
</style>