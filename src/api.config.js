import Vue from 'vue';

var globalData = Vue.extend({
    data: function () {
        return {
                client_id: 'ec5b37e8f5744f93866f7463c83989a6',
                client_secret: 'abd6bacbf41945ae9a1735e089167829',
                spotifyAPI: 'https://api.spotify.com/v1/',
                redirect_uri: 'http://localhost:8888/callback',
        }
    }
});

module.exports = globalData;