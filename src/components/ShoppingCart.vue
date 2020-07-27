<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }} products)</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(p, index) in products">
				  <td>{{ index+1 }})</td>
                  <td>{{ p.name }}</td>
				  
                  <td>{{ p.price | dollars }}</td>
                  <td>
				  <button @click='addToCart(p.invId)' class = "btn btn-default btn-xs">
					<span class = "glyphicon glyphicon-plus" style="color:green"></span>
				  </button> 
                 <a href="#" v-on:click="addToCart(p.invId)" class="btn btn-info btn-xs">
          <span class="glyphicon glyphicon-plus"></span> 
        </a>
		
                  {{ p.quantity }}				  
				  <a href="#" v-on:click="removeFromCart(p.invId)" class="btn btn-info btn-xs">
          <span class="glyphicon glyphicon-minus"></span> 
        </a>
				 
				  <button @click='removeFromCart(p.invId)' class = "btn btn-default btn-xs">
				    <span class = "glyphicon glyphicon-minus" style="color:red"></span>
				  </button>  
				  
				  </td>
				  <td>{{ p.quantity * p.price | dollars }}</td>
                </tr>		
                
				<template v-if="products.length > 0">			
                <tr>
				  <th></th>
				  <th></th>
                  <th>Totals</th>
				  <th></th> 
                  <th>{{ total | dollars }}</th>                  
                </tr>
				</template>
				<template v-else>			
                <tr>
				  <th></th>
				  <th></th>
                  <th>Carty is Empty</th>
				  <th></th> 
                  <th></th>                  
                </tr>
				</template>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary" @click="checkout()">Check out</button>			 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters';

export default {
  name: 'shoppingCart',
  computed: {
    products() { 
	  return this.$store.getters.cartProducts; 	  
	}, 
    numInCart() { 
	  //for ditinct product count
	  //return this.products.length; 
	  
      //for total quantity	  
	  return this.products.reduce((totalQty, p) => {
          return totalQty + p.quantity
      }, 0)
	},	
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  filters: {
    dollars,
  },
  methods: {
    removeFromCart(invId) { this.$store.dispatch('removeFromCart', invId); },	
    addToCart(invId) { this.$store.dispatch('addToCart', invId); },	
    
	checkout(){
	  if (this.total > 0) { 
	    alert('Pay us $' + (this.total/100));
		this.$store.dispatch('emptyCart');
      } else {
	    alert('Cart is empty, Keep Shopping!');  
      }	  
	}
  }
};
</script>
