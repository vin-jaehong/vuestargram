<template>
    <div>
        <button @click="$emit('changeStep', 0)">게시글 목록</button>
        <button @click="$emit('changeStep', 1)">필터 선택</button>
        <button @click="$emit('changeStep', 2)">글 작성</button>
        <div v-if="step===0">
            <Post v-for="post of postList" :key="post.filter" :post="post"></Post>
        </div>
        <div v-if="step===1">
            <!-- 필터선택페이지 -->
            <div class="upload-image" :class="selectedFilter" :style="{backgroundImage: `url(${uploadImage})`}"></div>
                <div class="filters">
                    <FilterBox :uploadImage="uploadImage" :filter="filter" v-for="filter,i of filterList" :key="i">
                        {{ filter }}
                    </FilterBox>
                </div>
            </div>
        <div v-if="step===2">
            <!-- 글작성페이지 -->
            <div class="upload-image" :class="selectedFilter" :style="{backgroundImage: `url(${uploadImage})`}"></div>
            <div class="write">
                <textarea class="write-box" @keydown="$emit('changeContent', $event.target.value)">write!</textarea>
            </div>
        </div>

        <div v-if="step===3">
            <MyPage></MyPage>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue';
    import FilterBox from './FilterBox.vue';
    import filterList from '../assets/filterList';
    import MyPage from './MyPage.vue';
    
    export default {
        name: 'isContainer',
        data() {
            return {
                filterList,
            };
        },
        components: {
            Post,
            FilterBox,
            MyPage,
        },
        props: {
            postList: [Object],
            step: Number,
            uploadImage: String,
            postContent: String,
            selectedFilter: String,
        }
    }
</script>

<style>
    .upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
    }
    .filters{
    overflow-x:scroll;
    white-space: nowrap;
    }
    .filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    }
    .filters::-webkit-scrollbar {
    height: 5px;
    }
    .filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    .filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
    }
    .filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
    .write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
    }
</style>