<template>
   <div
      class="cont"
    >
      <v-layout  fill-height align-center>
        <v-container style="margin-top:20px;">

            <v-img  class="img_profile" :src="src" ></v-img>

          
          <v-row align="center" justify="center" class="black--text">            
            <v-col cols="12">
              <div 
                class="text_div"
              >Welcome To My Page</div>
              <div class="text_div2">I am Android and Fullstack Web Developer.</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LanderView',
    data(){
      return{
        src: ''
      }
    },
    async mounted(){
    function randomNumber(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     var random =  Math.floor(Math.random() * (max - min + 1)) + min;
     return random;
    }
    // function random(mn, mx) {
    //     return Math.random() * (mx - mn) + mn;
    // }
      const res = await axios.get('https://api-ashmitaryan.herokuapp.com/api/image-upload');
      const data = res.data;
      const index = randomNumber(1,data.file.length);
      console.log(data, index);
      this.src = data.file[index].url;
    }
}
</script>

<style scoped>
.img_profile{
  margin-top: 100px;
  width:150px;
  height:150px;
  display: block;
}
.img_profile:hover{
  width:200px;
  height:200px;
  transition: width 0.2s, height 0.2s;
}
.text_div{
  font-size:70px;
  font-weight: bolder;
  color:#000000;
}
.text_div2{
  font-size: 40px;
  font-weight: bold;
  color:#000000;
}
.cont{
  height: 70vh;
  width: 100%;
  background-image: url("../assets/bg_img1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 5s;

  animation-name: animate;
  animation-direction:normal ;
  animation-duration:30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function:ease-in-out;
}
@keyframes animate {
  0%{
   background-image: url("../assets/bg_img2.jpg");
  }16.66%{
   background-image: url("../assets/bg_img1.jpg");
  }33.32%{
     background-image: url("../assets/bg_img3.jpg");
  }49.98%{
     background-image: url("../assets/bg_img4.jpg");
  }66.64%{
     background-image: url("../assets/bg_img5.jpg");
  }83.3%{
      background-image: url("../assets/bg_img7.jpg");
  }99%{
    background-image: url("../assets/bg_img6.jpg");
  }
}
@media screen and (max-width:800px) {
  .img_profile{
    width:100px;
    height:100px;
  }
  .cont{
    height:50%;
  background-size:cover;
  }
  .text_div{
  font-size:30px;
  font-weight: bolder;
  }
.text_div2{
  color:#000000;
  font-size: 20px;
  font-weight: bold;
}
.img_profile:hover{
  width:110px;
  height:110px;
}
}
</style>