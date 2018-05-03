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
        <div>
          <b-btn v-b-modal.modal1 class="btn-block mb-1">Edit campaign copy</b-btn>
          <b-modal
            id="modal1"
            :title="'Editing: ' + campaign.slug"
            :hide-footer="true"
          >
            <CampaignEditForm :campaign="campaign" />
          </b-modal>
        </div>
        <b-button class="btn-block mb-3">Add another action</b-button>
        <b-list-group>
          <b-list-group-item v-for="action in campaign.actions" key="action.id" variant="link">{{ action.title }} </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignEditForm from '@/components/CampaignEditForm.vue';
import axios from 'axios';

export default {
  name: 'campaign-admin',
  props: ['slug'],
  components: { CampaignEditForm },
  data() { return {campaign: {}, initialCampaign: {}} },
  created () {
    var vm = this;
    axios.get(vm.$props.slug)
      .then(function(response) {
        vm.campaign = response.data;
        vm.initialCampaign = response.data;
      })
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
