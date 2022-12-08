<template>
  <div class="add-product">
    <the-header-page :title="`Add product`" />
    <div class="add-product-content">
      <div class="container">
        <div class="header">
          <p class="title">Determine The Specifications Carefully</p>
          <p class="sub-title">* Indicates A Required Field</p>
        </div>
        <form @submit.prevent="addProduct">
          <div class="form-row">
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="text"
                placeholder="Product Name *"
                v-model="form.name"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <v-select :options="options"></v-select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <textarea
                v-model="form.description"
                class="custome-input"
                cols="30"
                rows="5"
                placeholder="Description Your Product / Price / Quantity / Size / Gendar / Type ........ *"
              ></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Price *"
                v-model="form.price"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Quantity *"
                v-model="form.quantity"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Size *"
                v-model="form.sizes"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Weight *"
                v-model="form.weight"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Width *"
                v-model="form.width"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-6">
              <input
                type="number"
                placeholder="Height *"
                v-model="form.height"
                class="custome-input"
              />
            </div>
          </div>
          <div class="form-row">
            <!-- <div class="form-group col-lg-6 col-md-6 col-12">
              <v-select :options="gender"></v-select>
            </div> -->
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="text"
                placeholder="Type *"
                v-model="form.type"
                class="custome-input"
              />
            </div>
          </div>
          <div class="upload-images mb-4">
            <div class="imgs-uploaded" v-if="preview_images.length > 0">
              <ul class="list-style">
                <li
                  class="list"
                  v-for="(item, index) in preview_images"
                  :key="index"
                >
                  <img :src="item" alt="alt_img" />
                  <button
                    class="delete-btn"
                    type="button"
                    @click.prevent="deleteImg(item)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 19.022 19.022"
                    >
                      <defs>
                        <style>
                          .a,
                          .b,
                          .c {
                            fill: none;
                          }
                          .b,
                          .c {
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: bevel;
                            stroke-width: 2px;
                          }
                          .c {
                            fill-rule: evenodd;
                          }
                        </style>
                      </defs>
                      <rect class="a" width="19.022" height="19.022" />
                      <g transform="translate(2.378 1.435)">
                        <line
                          class="b"
                          x1="4.755"
                          y1="4.755"
                          transform="translate(4.755 7.442)"
                        />
                        <line
                          class="b"
                          x1="4.755"
                          y2="4.755"
                          transform="translate(4.755 7.442)"
                        />
                        <rect class="b" width="14.266" height="3.17" rx="1" />
                        <path
                          class="c"
                          d="M16.1,5.81v11.4a1.585,1.585,0,0,1-1.585,1.585H6.585A1.585,1.585,0,0,1,5,17.207V5.81"
                          transform="translate(-3.415 -2.64)"
                        />
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <label
              for="upload-label"
              :class="{ absolute_label: preview_images.length > 0 }"
            >
              Upload Images
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style="fill: #A0AEC0;"
              >
                <path
                  d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"
                ></path>
                <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"></path>
              </svg>
              <input
                type="file"
                accept="image/*"
                multiple="multiple"
                @change="uploadImages"
                id="upload-label"
              />
            </label>
          </div>
          <div class="form-row">
            <div class="form-group discount-content col-lg-4 col-md-4 col-12">
              <p class="discount-text">Is There A Discount?</p>
              <label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" v-model="isDiscount" />
                <div class="slider round"></div>
              </label>
            </div>
            <div class="form-group col-lg-4 col-md-4 col-12" v-if="isDiscount">
              <input
                type="number"
                placeholder="Enter The Percentage*"
                v-model="form.discountPrecent"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-4 col-md-4 col-12" v-if="isDiscount">
              <input
                type="number"
                placeholder="Enter The Amount*"
                v-model="form.discountAmount"
                class="custome-input"
              />
            </div>
          </div>
          <button class="add-product-btn" type="submit" v-if="!isLoading">
            add
          </button>
          <button class="add-product-btn" disabled v-else>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
export default {
  components: { TheHeaderPage },
  data() {
    return {
      isDiscount: "",
      options: ["Canada", "United States"],
      gender: ["male", "female"],
      preview_images: [],
      image_list: [],
      form: {
        name: "",
        description: "",
        price: "",
        quantity: "",
        sizes: "",
        weight: "",
        width: "",
        height: "",
        type: "",
        discountPrecent: "",
        discountAmount: "",
      },
      isLoading: false,
    };
  },
  methods: {
    addProduct() {
      this.isLoading = true;
      let formData = new FormData();

      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      formData.append("price", this.form.price);
      formData.append("quantity", this.form.quantity);
      formData.append("sizes", this.form.sizes);
      formData.append("weight", this.form.weight);
      formData.append("width", this.form.width);
      formData.append("height", this.form.height);
      formData.append("type", this.form.type);
      formData.append("discountPrecent", this.form.discountPrecent);
      formData.append("discountAmount", this.form.discountAmount);
      formData.append("image_1", this.image_list[0]);
      formData.append("image_2", this.image_list[1]);
      formData.append("image_3", this.image_list[2]);
      formData.append("image_4", this.image_list[3]);
      formData.append("image_5", this.image_list[4]);
      formData.append("image_6", this.image_list[5]);



      this.$axios
        .$post(`stores/products/add`, formData)
        .then((res) => {
          console.log(res);

          if (res.code == 0) {
            new Swal({
              position: "center",
              icon: "error",
              text: res.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "center",
              icon: "success",
              text: res.msg,
              showConfirmButton: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    deleteImg(event) {
      for (let index = 0; index < this.preview_images.length; index++) {
        if (event == this.preview_images[index]) {
          this.preview_images.splice(index, 1);
          this.image_list.splice(index, 1);
        }
      }
    },
    uploadImages(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_images.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
