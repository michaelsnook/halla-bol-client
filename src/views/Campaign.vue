<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="title-container mb-4">
          <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
          <h1 class="title-text">Petition to stop fascism</h1>
        </div>

        <p>Here's a campaign body. It's a very important part of any campaign.
          <strong>That's why we're calling on everyone to be a lot nicer to each other.</strong>
          Except to fascists.</p>
        <p>See we have to smash fascism. Sometimes the fascists will
          perceive this as being mean towards them, and we really can't do much about that.</p>
        <p>But what we <em>can do</em> is sign internet petitions. That'll show 'em!</p>

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
p {
  line-height: 2rem;
  font-size: 1.6rem;
  font-weight: normal;
}
</style>
