<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title-container mb-4">
          <b-img :src="campaign.image" fluid alt="Responsive image" />
          <h1 class="title-text">{{ campaign.name }}</h1>
        </div>

        <div class="campaign-description">
          <span v-html="campaign.description"></span>
        </div>

      </div>
      <div class="col-md-5 col-lg-4 my-lg-4 my-md-3">
        <SingleForm />
      </div>
    </div>
  </div>
</template>

<script>
import SingleForm from '@/components/SingleForm.vue';

export default {
  name: 'campaign',
  components: { SingleForm },
  data () {
    return {
      campaign: {
        slug: () => $route.params.slug,
      },
    };
  },
  created () {
    var vm = this;
    vm.$http
      .get(vm.$route.params.slug)
      .then(function(response) {
        vm.campaign = response.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  position: relative;
}
.title-text {
  position: absolute;
  top: 50%;
  left: 2rem;
  color: white;
  background-color: rgba(0,0,0,0.4);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
p {
  line-height: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
}
blockquote {
  padding-left: 2rem;
  border-left: 3px solid gray;
}
</style>
