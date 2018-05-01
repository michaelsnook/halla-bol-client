<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title-container">
          <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
          <h1 class="title-text">Campaign title</h1>
        </div>

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
</style>
