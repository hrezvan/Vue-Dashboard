<template>
<div class='featured'>
    <div class="featuredItem">
        <span class="featuredTitle">Revanue</span>
        <div class="featuredMoneyContainer">
            <span class="featuredMoney">$12.45</span>
            <span class="featuredMoneyRate">
                $-11.333
                <font-awesome-icon class='arrowIcon negative' icon="arrow-down" />
            </span>
        </div>
        <span class='featuredsub'>Compared to last month</span>
    </div>
    <div class="featuredItem">
        <span class="featuredTitle">Sales</span>
        <div class="featuredMoneyContainer">
            <span class="featuredMoney">$23.09</span>
            <span class="featuredMoneyRate">
                $-1.42
                <font-awesome-icon class='arrowIcon negative' icon="arrow-down" />
            </span>
        </div>
        <span class='featuredsub'>Compared to last month</span>
    </div>
    <div class="featuredItem">
        <span class="featuredTitle">Cost</span>
        <div class="featuredMoneyContainer">
            <span class="featuredMoney">$52.2</span>
            <span class="featuredMoneyRate">
                $6.83
                <font-awesome-icon class='arrowIcon' icon='arrow-up' />
            </span>
        </div>
        <span class='featuredsub'>Compared to last month</span>
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
.featured {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.featuredItem {
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 18px -8px #000000;
  box-shadow: 0px 7px 18px -8px #000000;
}

.featuredTitle {
  font-size: 20px;
}

.featuredMoneyContainer {
  margin: 10px 0px;
  display: flex;
  align-items: center;
}

.featuredMoney {
  font-size: 30;
  font-weight: 600;
}

.featuredMoneyRate {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.arrowIcon {
  font-size: 14px;
  margin-left: 10px;
  color: green;
}

.arrowIcon.negative {
  color: red;
}

.featuredsub {
  font-size: 15px;
  color: grey;
}

</style>
