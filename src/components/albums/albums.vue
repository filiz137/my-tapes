<template>
    <div>
        <span v-on:click="myAlbums(next)" v-if="next">load more >></span> 
        <span v-on:click="sort(albums)">Sort</span>
        <div class="albums">
            <album-vinyl class="albums-item"  v-for="(item, idx) in albums" :key="idx" :albums="item"></album-vinyl>
        </div>
    </div>
</template>
<script>

    import albumVinyl from "../album.vue";
    import globalData from "../../config.js";

    export default {
        name: 'albums',
        extends: globalData,
        components: {
            albumVinyl,
        },
        data: function () {
            return {
                albums: [],
                next: null,
                previous: null
            }
        },
        created() {
            this.myAlbums();
        },
        watch: {
            '$route' (to, from) {},
        },
        methods: {
            myAlbums: function(next) {
                var vm = this;

                if ( typeof(next) == 'undefined' ) {
                    var savedAlbumUrl = vm.spotifyAPI + 'me/albums' + '?limit=10';
                } else {
                    var savedAlbumUrl = next;
                };

                vm.$http.get(savedAlbumUrl, {headers: {Authorization: 'Bearer ' + vm.id_token }}).then(result => {
                vm.albums = vm.albums.concat(result.body.items);
                vm.next = result.body.next;
                    }, err => {
                        vm.error = true;
                        console.log('error')
                    });
            },
            sort: function(arr) {
                arr.sort(function(a, b) {
                    var nameA = a.album.name.toUpperCase();
                    var nameB = b.album.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                    });

                    // return arr.sort();
                }
        },
        filters: {}
    }
    
</script>