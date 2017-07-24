'use strict';

import './scss/main.scss';

var track = new Vue({
    el: '#main',
    data: {
        client_id: 'ec5b37e8f5744f93866f7463c83989a6',
        client_secret: 'abd6bacbf41945ae9a1735e089167829',
        spotifyAPI: 'https://api.spotify.com/v1/',
        redirect_uri: 'http://localhost:8888/callback',
        id_token: 'BQB7L9dp9-4sva7Qk2C16d0PvrptmImTZww1cuksEM4gkEV0GzPGKCQdOE25ReuagwepW0VqLWSKHVaFcjgrgv2g5-v6Myh8fxZ4AVH5pRvZF8SPluZnT-D4qvHMTwb-mgGNvLFQ9G19ixXt44KX2FRg3Ogszli5XQzp_cZoL7Ih2SyM5gO7tRorjQQcpfgB_87EOg7KHkv1UsvC4vr2xrK22L-EcyFYYOIIPMuNsIJaZ6uY4KaCcG38J0N-HW8vyX2AWS1c3cAEVqe4BjhGHFOoQ5laLL8klrO83Sag-lxAh6LREYrpYU9iXjbzTwNf',
        albums: [],
        next: null,
        previous: null

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
})


track.myAlbums();


