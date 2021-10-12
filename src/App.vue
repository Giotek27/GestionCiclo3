<template>
  <div>
    <Header/>
    <Banner/>

    <div>
      <router-view/>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  
  data:()=>({
    //
  }),
  components:{
    Header,
    Banner,
    Footer,
  }
  
};

</script>