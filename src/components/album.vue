<template>
    <div>
        <img class="albums-cover" v-bind:src="albums.album.images[1].url" alt="">
        <!--<div>{{ item.album.name }}</div>-->
    </div>
</template>
<script>
export default {
    name: 'albumVinyl',
    props: ['albums'],
    // props: {
    //     img: {
    //         type: String
    //     },
    //     name: {
    //         type: String
    //     }
    // },
};
</script>