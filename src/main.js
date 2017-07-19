'use strict';

var track = new Vue({
    el: '#main',
    data: {
        client_id: 'ec5b37e8f5744f93866f7463c83989a6',
        client_secret: 'abd6bacbf41945ae9a1735e089167829',
        spotifyAPI: 'https://api.spotify.com/v1/',
        redirect_uri: 'http://localhost:8888/callback',
        id_token: 'BQAb0Vo_fFV0BAu-445Eu1ou-VjRXx1TYenFGzvur67w89EJ1F_cRrgPAs4awlmtmmrWDi3UaOjb7NVuyrMEOG3RjdI7Acx-u1N1fRgMKTHsnoQauYAR3Jj8tMhNf4s77be7ipWM-KSsMC-2kdqyM45TYCr_86skPNH_Yz-Blb4gGQI847ehItXUXmGIzhr4_hMa2h7A490yYQHMyDPGag16Nw3YsqPlMYLjuHdOx5LUEygfLW_MUMUNEqf2P7gZM9w3pDDzDeYSUWJWLFRzrlyo98I50T64GjAUMpDeQe-1NnSyOR7KLQ1EEPlpJKT4'
    },

    methods: {
        myTracks: function() {
            console.log('myTrackshello')
            var savedTrackUrl = this.spotifyAPI + 'me/tracks';
            this.$http.get(savedTrackUrl, {headers: {Authorization: 'Bearer BQAb0Vo_fFV0BAu-445Eu1ou-VjRXx1TYenFGzvur67w89EJ1F_cRrgPAs4awlmtmmrWDi3UaOjb7NVuyrMEOG3RjdI7Acx-u1N1fRgMKTHsnoQauYAR3Jj8tMhNf4s77be7ipWM-KSsMC-2kdqyM45TYCr_86skPNH_Yz-Blb4gGQI847ehItXUXmGIzhr4_hMa2h7A490yYQHMyDPGag16Nw3YsqPlMYLjuHdOx5LUEygfLW_MUMUNEqf2P7gZM9w3pDDzDeYSUWJWLFRzrlyo98I50T64GjAUMpDeQe-1NnSyOR7KLQ1EEPlpJKT4' }}).then(result => {
                    console.log(result.body)
                }, err => {
                    this.error = true;
                    console.log('sdfdfdfd')
                });
        }
        
    },
    filters: {}
})


track.myTracks();


