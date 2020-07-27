<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="getImgUrl(pic)" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ description }} <br> {{price | dollars}}</div>
        <div>
          <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters';

export default {  
  name: 'item',
  props: ['invId', 'name', 'pic', 'description', 'price'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
	getImgUrl(pic) {
      return require('../assets/' + pic)
   }
  },
};
</script>
