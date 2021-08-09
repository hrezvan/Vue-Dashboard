<template>
    <div class="widgetLg">
        <h3 class="widgetLgTitle">Latest Transactions</h3>
        <table class="widgetLgTable">
            <tr class="widgetLgTR">
                <th class="widgetLgTH">Customer</th>
                <th class="widgetLgTH">Date</th>
                <th class="widgetLgTH">Amount</th>
                <th class="widgetLgTH">Status</th>
            </tr>
            <tr class="widgetLgTR">
                <td class="widgetLgUser">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" class="widgetLgImg">
                    <span class="widgetLgName">Susan Carol</span>
                </td>
                <td class="widgetLgDate">2 June 2021</td>
                <td class="widgetLgAmount">120 $</td>
                <td class="widgetLgStatus">
                    <button class="widgetLgButtonApproved">Approved</button>
                </td>
            </tr>
            <tr class="widgetLgTR">
                <td class="widgetLgUser">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" class="widgetLgImg">
                    <span class="widgetLgName">Susan Carol</span>
                </td>
                <td class="widgetLgDate">2 June 2021</td>
                <td class="widgetLgAmount">120 $</td>
                <td class="widgetLgStatus">
                    <button class="widgetLgButtonDeclined">Declined</button>
                </td>
            </tr>
            <tr class="widgetLgTR">
                <td class="widgetLgUser">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" class="widgetLgImg">
                    <span class="widgetLgName">Susan Carol</span>
                </td>
                <td class="widgetLgDate">2 June 2021</td>
                <td class="widgetLgAmount">120 $</td>
                <td class="widgetLgStatus">
                    <button class="widgetLgButtonPending">Pending</button>
                </td>
            </tr>
            <tr class="widgetLgTR">
                <td class="widgetLgUser">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" class="widgetLgImg">
                    <span class="widgetLgName">Susan Carol</span>
                </td>
                <td class="widgetLgDate">2 June 2021</td>
                <td class="widgetLgAmount">120 $</td>
                <td class="widgetLgStatus">
                    <button class="widgetLgButtonApproved">Approved</button>
                </td>
            </tr>
        </table>
    </div>
</template>


<style scoped>
.widgetLg {
    flex: 2;
    -webkit-box-shadow: 0px 7px 18px -8px #000000;
    box-shadow: 0px 7px 18px -8px #000000;
    padding: 20px;
    border-radius: 5px;
}
.widgetLgTitle {
    font-size: 22px;
    font-weight: 600;
}
.widgetLgImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.widgetLgButtonApproved {
    background-color: #e5faf2;
    border-radius: 5px;
    border: none;
    padding: 5px;
    color: #3bb077;
}
.widgetLgButtonDeclined {
    background-color: #fff0f1;
    border-radius: 5px;
    border: none;
    padding: 5px;
    color: #d95087;
}
.widgetLgButtonPending {
    background-color: #ebf1fe;
    border-radius: 5px;
    border: none;
    padding: 5px;
    color: #2a7ade;
}
.widgetLgTable {
    width: 100%;
    border-spacing: 20px;
}
.widgetLgTH {
    text-align: left;
}
.widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
}
.widgetLgDate,.widgetLgAmount {
    font-weight: 300;
}
</style>