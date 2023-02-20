<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="검색"  @input="search($event.target.value)" />
        <div class="post-header" v-for="follower of followerList" :key="follower.id">
            <div class="profile" :style="{backgroundImage: `url(${follower.image})`}"></div>
            <span class="profile-name">{{ follower.name }}</span>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    let followerList = ref([]);
    let followerListOrg = [];
    onMounted(() => {
        axios.get('/follower.json').then((result)=> {
            followerList.value = result.data;
            followerListOrg = [...followerList.value];
        });
    });

    function search(searchString) {
        followerList.value = followerListOrg.filter(follower=>follower.name.includes(searchString));
    }
</script>

<style>
</style>