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
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'CampaignEditForm',
  props: ['campaign'],
  // @TODO should track initial state and current form state
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.image = '';
      this.form.description = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
