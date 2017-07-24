'use strict';

import './scss/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import AlbumImage from './components/AlbumImage.vue';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
    { path: '', component: AlbumImage }
];

const router = new VueRouter({
    // mode: 'history',
    routes
});

var albums = new Vue({
    router,
    el: '#main',
    data: {}
});


// var albums = new Vue({
//     el: '#main',
//     data: {
//         client_id: 'ec5b37e8f5744f93866f7463c83989a6',
//         client_secret: 'abd6bacbf41945ae9a1735e089167829',
//         spotifyAPI: 'https://api.spotify.com/v1/',
//         redirect_uri: 'http://localhost:8888/callback',
//         id_token: 'BQDDhTNvqF1ckvt03mXxJ6_8cKJmfglDvucxS0xdiZVe6suNorqM0S4Vz4LwKmy_ZRxYqLmSs24yn43rnlZ1P3-C75adT6NIzF7P2QrHSPEmMODgeDyDi8mQrud1FFBVPI-_a3hRT9VIjPKD6qom5RBF5Zj5VNJA9JLb0LxT2kEvsBzzJiFlGr85PWiKcIBubeARm_c3bOMeB2XCo1miD5x7uMk_bmlksi9olOLQVBq8EQyQ2KHJxmB4sp8IGcQAZWx-vvvGlHBZ1wzpCOLpLbpTBlLkgGOAOMzqpLBx4xWCtjkDE_ckKAF-SxddiR0U',
//         albums: [],
//         next: null,
//         previous: null

//     },

//     methods: {
//         myAlbums: function(next) {
//             var vm = this;

//             if ( typeof(next) == 'undefined' ) {
//                 var savedAlbumUrl = vm.spotifyAPI + 'me/albums' + '?limit=10';
//             } else {
//                 var savedAlbumUrl = next;
//             }
            
//             vm.$http.get(savedAlbumUrl, {headers: {Authorization: 'Bearer ' + vm.id_token }}).then(result => {
//                vm.albums = vm.albums.concat(result.body.items);
//                vm.next = result.body.next;
//                 }, err => {
//                     vm.error = true;
//                     console.log('error')
//                 });
//         },
//         sort: function(arr) {
//             arr.sort(function(a, b) {
//             var nameA = a.album.name.toUpperCase();
//             var nameB = b.album.name.toUpperCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }

//             return 0;
//             });

//             // return arr.sort();
//         }
        
//     },
//     filters: {}
// })


// albums.myAlbums();


