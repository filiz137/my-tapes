<template>
    <div>
        <span v-on:click="myAlbums(next)" v-if="next">load more >></span> 
        <span v-on:click="sort(albums)">Sort</span>
        <ul class="albums">
            <li class="albums-item" v-for="item in albums">
                <!--<div>{{ item.album.name }}</div>-->
                <img class="albums-cover" v-bind:src="item.album.images[1].url" alt="">
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        name: 'AlbumImage',
        components: {},
        data: function () {
            return {
                client_id: 'ec5b37e8f5744f93866f7463c83989a6',
                client_secret: 'abd6bacbf41945ae9a1735e089167829',
                spotifyAPI: 'https://api.spotify.com/v1/',
                redirect_uri: 'http://localhost:8888/callback',
                id_token: 'BQDwsKAwm2elRbphaMqiXX248r800xJKAlXStqJ8dj5lhZQZVv7yMsZ1pbAwFuoCnQUygl8Um6mMgaqBXOSYFEnHR6ptYJzuUXLoe3RP-MRg8911gFcY2FS_ReMWT40MRfTnTnmm0b0kO9Sasm1F8rEhouZhd1XCMU9lRNC10Fnspie6ty0PHji2MyNx6Uj56drudb8KQtpbv_6BopwlB6sOQtCg0IyrodFMGQ7TNGFRPtHjZ4BSx-C6Z-jjuwvDy6ejfHRiMBDZjTgcI2jvuYUD80xSX_hh_qQkpJpRBEcjJJgRUSqOE-pdKDIHiwF5',
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
                }
                
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