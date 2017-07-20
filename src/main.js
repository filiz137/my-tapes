'use strict';

var track = new Vue({
    el: '#main',
    data: {
        client_id: 'ec5b37e8f5744f93866f7463c83989a6',
        client_secret: 'abd6bacbf41945ae9a1735e089167829',
        spotifyAPI: 'https://api.spotify.com/v1/',
        redirect_uri: 'http://localhost:8888/callback',
        id_token: 'BQB7M5QG3PlqpK6G3yGanqzQShRXvz2oPCKzSgEXso-1XG6qyUmYxD4TMOkEL1a85nJ7vgIIDG0JhQ0vO2ieKsKQIAaW6CtEMdp0SLXeqcNHDkpgbnMWHMOU0Xv3zQQqZlLsmwJduD7y5U-Te3xGL9XXh3phbG_ySXxzmmyr_W5ct1JYn6an8kpbWJnoKGXNJiuxZBuGYQiIJWbUhM5sWALgF864GRLphkpB2AIM91SwhMbdliZeW7knhsXr4HoufWxEU8rmDO2Eqi_f5JhC0DAHuYqkM9bKYH17z9fkrE9akC_CGg-jU3cpJU9Zh-Oi',
        tracks: []
    },

    methods: {
        myTracks: function() {
            var savedTrackUrl = this.spotifyAPI + 'me/tracks';
            this.$http.get(savedTrackUrl, {headers: {Authorization: 'Bearer BQB7M5QG3PlqpK6G3yGanqzQShRXvz2oPCKzSgEXso-1XG6qyUmYxD4TMOkEL1a85nJ7vgIIDG0JhQ0vO2ieKsKQIAaW6CtEMdp0SLXeqcNHDkpgbnMWHMOU0Xv3zQQqZlLsmwJduD7y5U-Te3xGL9XXh3phbG_ySXxzmmyr_W5ct1JYn6an8kpbWJnoKGXNJiuxZBuGYQiIJWbUhM5sWALgF864GRLphkpB2AIM91SwhMbdliZeW7knhsXr4HoufWxEU8rmDO2Eqi_f5JhC0DAHuYqkM9bKYH17z9fkrE9akC_CGg-jU3cpJU9Zh-Oi' }}).then(result => {
               this.tracks = result.body.items;
               console.log(tracks);
                }, err => {
                    this.error = true;
                    console.log('sdfdfdfd')
                });
        }
        
    },
    filters: {}
})


track.myTracks();


