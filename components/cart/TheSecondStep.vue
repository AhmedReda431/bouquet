<template>
  <div class="content">
    <div class="store-box address-box">
      <p class="box-title">
        <span class="box-num">1</span> Select Address
      </p>
      <ul class="list-style">
        <li class="list">
            <input type="radio" v-model="address" name="address" id="address1" value="home">
            <label for="address1">
              <p class="title">home</p>
              <p class="desc">
                18658 Tillman Plain, North Glennatown, Nevada, Peru
              </p>
            </label>
        </li>
        <li class="list">
            <input type="radio" v-model="address" name="address" id="address2" value="work">
            <label for="address2">
              <p class="title">work</p>
              <p class="desc">
                18658 Tillman Plain, North Glennatown, Nevada, Peru
              </p>
            </label>
        </li>
        <li class="list">
            <input type="radio" v-model="address" name="address" id="newAddress" value="newAddress">
            <label for="newAddress">
              <p class="title">NEW ADDRESS</p>
            </label>
        </li>
      </ul>
      <div class="add-new-address mt-4" v-if="address == 'newAddress'">
        <div class="form-row">
          <div class="form-group col-lg-6 col-md-6 col-12">
            <input type="text" placeholder="Label (Gym, School, Airport, Restaurant ....) *" v-model="form.name" class="custome-input" />
          </div>
          <div class="form-group col-lg-6 col-md-6 col-12">
            <input type="text" placeholder="Address *" v-model="form.address" class="custome-input" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-lg-6 col-md-6 col-12">
            <v-select :options="options"></v-select>
          </div>
          <div class="form-group col-lg-6 col-md-6 col-12">
            <v-select :options="options"></v-select>
          </div>
        </div>
        <button type="button" @click="addNewAddress" class="new-address-btn">ADD NEW ADDRESS</button>
      </div>
    </div>
    <div class="store-box payment-box">
      <p class="box-title">
        <span class="box-num">2</span> Select Payment Method
      </p>
      <ul class="list-style">
        <li class="list">
            <input type="radio" v-model="payment" name="payment" id="creditCard" value="credit">
            <label for="creditCard">
              <p class="title">Credit Card</p>
            </label>
            <div class="credit-content mt-3" v-if="payment == 'credit'">
              <div class="form-row">
                <div class="form-group col-12">
                  <input type="text" placeholder="Card number*" v-model="credit.cardNumber" class="custome-input" />
                </div>
                <div class="form-group col-lg-12 col-md-12 col-12">
                  <input type="text" placeholder="Card Name *" v-model="form.cardName" class="custome-input" />
                </div>
                <div class="form-group col-lg-6 col-md-6 col-12">
                  <input type="number" placeholder="Card expiry date *" v-model="form.carExpiry" class="custome-input" />
                </div>
                <div class="form-group col-lg-6 col-md-6 col-12">
                  <input type="number" placeholder="CVV *" v-model="form.cardCode" class="custome-input" />
                </div>
              </div>
            </div>
        </li>
        <li class="list">
            <input type="radio" v-model="payment" name="payment" id="cashOnDelivery" value="cash">
            <label for="cashOnDelivery">
              <p class="title">Cash On Delivery</p>
            </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          'Canada',
          'United States'
        ],
        form: {
          name: '',
          address: ''
        },
        credit: {
          cardNumber: '',
          cardName: '',
          carExpiry: '',
          cardCode: ''
        },
        address: '',
        payment: ''
      }
    },
    methods: {
      addNewAddress() {
        console.log(this.address);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
