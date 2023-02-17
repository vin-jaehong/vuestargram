<template>
    <div>
        <Post v-for="post of postList" :key="post.filter" :post="post"></Post>
    </div>
</template>

<script>
    import Post from './Post.vue';
    
    export default {
        name: 'isContainer',
        components: {
            Post,
        },
        props: {
            postList: [Object],
        }
    }
</script>

<style>
</style>