<template>
    <div class='home'>
      <featured-info></featured-info>
      <div class="homeWidgets">
        <widget-small></widget-small>
        <widget-large></widget-large>
      </div>
    </div>
</template>

<script>
import Featuredinfo from '../components/featuredinfo.vue';
import Widgetsmall from '../components/widgetSm.vue';
import Widgetlarge from '../components/widgetLg.vue';

export default {
  components: {
    "featured-info": Featuredinfo,
    "widget-small": Widgetsmall,
    "widget-large": Widgetlarge
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
  .home {
    flex: 4;
    /* background: darkgreen; */
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .homeWidgets {
    display: flex;
    margin: 20px;
  }

</style>
