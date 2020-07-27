import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Book', pic: 'book.jpg', description: 'Professional Javascript', price: 999 },
      { invId: 2, name: 'Dog', pic: 'dog.jpg', description: 'Puppy Dog', price: 1499 },
      { invId: 3, name: 'Rubik', pic: 'rubik.png', description: 'Made of Stainless Steel', price: 499 },
      { invId: 4, name: 'Toy', pic: 'toy.jpg', description: 'Good Quality Toy', price: 299 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    cartProducts: state => {
		return state.inCart.map(({ invId, quantity }) => {
			const product = state.forSale.find(p => p.invId === invId)            
			return {
				invId: product.invId,
				name: product.name,
				price: product.price,
				quantity
			}
		})
	}
  },
  mutations: {
    ADD_TO_CART(state, invId) { 
		const record = state.inCart.find(p => p.invId === invId)

	    if (!record) {
	      state.inCart.push({
	        invId,
	        quantity: 1
	      })
	    } else {
	      record.quantity++
	    }
	},
    REMOVE_FROM_CART(state, invId) { 
		const locationInCart = state.inCart.findIndex(p => {
			return p.invId ===  invId
		})

		if(state.inCart[locationInCart].quantity <= 1){
			state.inCart.splice(locationInCart, 1)
		} else {
			state.inCart[locationInCart].quantity--
		} 
	},
	EMPTY_CART(state) { 
		state.inCart.splice(0, state.inCart.length);
	}
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
	emptyCart(context) { context.commit('EMPTY_CART'); }
  },
});
