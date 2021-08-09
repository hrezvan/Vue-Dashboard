import home from './pages/home.vue';
import userList from './pages/userList.vue';
import newUser from './pages/newUser.vue';
import users from './pages/users.vue';
import productList from './pages/productList.vue';

export default [
    {path: '/' , component: home},
    {path: '/users' , component: userList},
    {path: '/users/:userid' , component: users},
    {path: '/addUser' , component: newUser},
    {path: '/products' , component: productList}
]