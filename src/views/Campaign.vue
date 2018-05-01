<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p><h1>Campaign title</h1></p>
        <p>here's a campaign body</p>
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
};
</script>
