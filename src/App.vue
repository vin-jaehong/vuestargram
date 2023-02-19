<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--;" v-if="step!==0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++;" v-if="step===1">Next</li>
      <li @click="publish" v-if="step===2">발행</li>
    </ul>

    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :postList="postList" :step="step" :uploadImage="uploadImage"
    :selectedFilter="selectedFilter" :postContent="postContent" 
    @changeContent="postContent=$event;" @changeStep="this.step = $event;" 
    />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
  import Container from './components/Container.vue';
  import postList from './assets/postList';
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
        postList,
        moreClickCount: 0,
        step: 0,
        uploadImage: '',
        postContent: '',
        selectedFilter: '',
      };
    },
    components: {
      Container,
    },
    methods: {
      more() {
        axios.get(`https://codingapple1.github.io/vue/more${this.moreClickCount}.json`)
          .then(result=> {
            this.postList.push(result.data);
            this.moreClickCount++;
            if (this.moreClickCount===2) this.moreClickCount=0;
          });
      },
      upload(e) {
        const uploadFiles = e.target.files;
        this.uploadImage = URL.createObjectURL(uploadFiles[0]);
        this.step = 1;
      },
      publish() {
        const post = {
          name: 'buddy',
          userImage: "https://placeimg.com/200/200/people",
          postImage: this.uploadImage,
          likes: 0,
          date: new Date(),
          liked: false,
          content: this.postContent,
          filter: this.selectedFilter,
        };
        this.postList.unshift(post);
        this.step = 0;
      },
    },

    mounted() {
      this.emitter.on('selectFilter', (filter)=> {
        this.selectedFilter = filter;
      });
    },
  }
</script>

<style>
  body {
    margin: 0;
  }
  ul {
    padding: 5px;
    list-style-type: none;
  }
  .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }
  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
  }
  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }
  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }
  .inputfile {
    display: none;
  }
  .input-plus {
    cursor: pointer;
  }
</style>
