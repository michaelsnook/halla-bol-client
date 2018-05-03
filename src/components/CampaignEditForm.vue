<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="exampleInputGroup1"
                    label="Campaign name"
                    label-for="exampleInput1"
                    description="Something punchy like 'Save The Humans' or 'Stop that Coal Mine'">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="campaign.name"
                      required
                      placeholder="Give your campaign a name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Featured image"
                    label-for="exampleInput2"
                    description="For best results use an image under 100kb and over 900px">
        <b-form-input id="exampleInput2"
                      type="url"
                      v-model="campaign.image"
                      required
                      placeholder="https://...">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Description"
                    label-for="exampleInput3"
                    description="Make it good, for social media revolution">
        <b-form-textarea id="exampleInput3"
                      rows="5"
                      v-model="campaign.description">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="danger">Submit</b-button>
      <b-button type="reset" variant="link" class="float-md-right">Cancel
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CampaignEditForm',
  props: ['campaign', 'initialCampaign'],
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      let data = { 'campaign':
        {
          slug: this.campaign.slug,
          name: this.campaign.name,
          description: this.campaign.description,
        }
      }
      axios.put(this.campaign.slug, data)
        .then(response => { console.log(response.data) });
    },
    onReset (evt) {
      evt.preventDefault();

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
