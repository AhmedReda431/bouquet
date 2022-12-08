export default {
    computed: {
      userData(){
        return this.$store.state.user
      }
    },
    methods:{
      testMe(){
        alert('test')
      }
    }
  }
  