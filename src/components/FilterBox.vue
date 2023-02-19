<template>
    <div @click="selectFilter(filter);" :class="`filter-item ${filter}`" style="color: black;" :style="{backgroundImage: `url(${uploadImage})`}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'FilterBox',
        props: {
            uploadImage: String,
            filter: String,
        },
        methods: {
            selectFilter(filter) {
                this.emitter.emit('selectFilter', filter);
            },
        },
    }
</script>

<style>
    .filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
    }
</style>