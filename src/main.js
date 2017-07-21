'use strict';

var track = new Vue({
    el: '#main',
    data: {
        client_id: 'ec5b37e8f5744f93866f7463c83989a6',
        client_secret: 'abd6bacbf41945ae9a1735e089167829',
        spotifyAPI: 'https://api.spotify.com/v1/',
        redirect_uri: 'http://localhost:8888/callback',
        id_token: 'BQD7_G2pKLZYkUGLIVfFOanz5yJ-bpUeorItHiKwD8MSx4hc13gaW3LjM5jQa5SfjIn1DrkqKSqxOxJlWX9xO1Z1VamuiGcSQLgz15pi1osRZe3Se6Uni-Mc9OTTTWX1s801EEfYkaiQxvlILqo04HAsI7igENIoJylshKbBxEtrApg6RTtTCLOXvQKOcB7e-JuyjjqcZl8wZ65wuRqv0IVo3hmAzlqdGO_tAym4L5fWP2_ebAn-7uc1hAdkRB2X6ajPEGDHPCBBIjWaNp-mSjoci4SRG4HjNsNfqxNLl2Vgj5drZ1f0v_w75NVL9rGn',
        albums: [],
        next: null,
        previous: null

    },

    methods: {
        myAlbums: function(next) {
            var vm = this;

            if ( typeof(next) == 'undefined' ) {
                var savedAlbumUrl = vm.spotifyAPI + 'me/albums';
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
        // sort: function () {
        //     vm.albums.album.name.sort(vm.sortAlphaNum);
        // },
        // reverse: function () {
        //     vm.albums.album.name.reverse();
        // },
        // sortAlphaNum: function (a,b) {
        //     var reA = /[^a-zA-Z]/g;
        //         var reN = /[^0-9]/g;
        //     var aA = a.name.replace(reA, "");
        //     var bA = b.name.replace(reA, "");
        //     if(aA === bA) {
        //         var aN = parseInt(a.name.replace(reN, ""), 10);
        //         var bN = parseInt(b.name.replace(reN, ""), 10);
        //         return aN === bN ? 0 : aN > bN ? 1 : -1;
        //     } else {
        //         return aA > bA ? 1 : -1;
        //     }
        // }
        
    },
    filters: {}
})


track.myAlbums();


