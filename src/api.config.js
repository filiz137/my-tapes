import Vue from 'vue';

var globalData = Vue.extend({
    data: function () {
        return {
                client_id: 'ec5b37e8f5744f93866f7463c83989a6',
                client_secret: 'abd6bacbf41945ae9a1735e089167829',
                spotifyAPI: 'https://api.spotify.com/v1/',
                redirect_uri: 'http://localhost:8888/callback',
                id_token: 'BQCijxNF5P1BaceZSlZ-uk8EB_5osNtAMleGP45UPpaV7BK2u0DiUtUtwjXpU4RnHy-0rU8-wCBFOKCgGTGRPgiWbcLdrBFy20WgZHNgRbQz-pkHDXZeIHPpnjfITSU_-ze8D5zo4QqFIW6oWUjKzdJOL1KMkLdlTXJtfXw9k9SSp1lD5N6QJxW_X1NdhBvrA5qNUq2YU-5OHyXPYE29ln0tyiNJRggGPKy9GVH73RqWnABZzsqtBBDxYsIm4-1E6xb1WNa4JhKJsIKEgiYlUdAcrbhUmf4VmMSnrLGFI9vIqagt1KyJJUNVXaf5N0sZ',
        }
    }
});

module.exports = globalData;