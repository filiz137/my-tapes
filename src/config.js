import Vue from 'vue';

var globalData = Vue.extend({
    data: function () {
        return {
                client_id: 'ec5b37e8f5744f93866f7463c83989a6',
                client_secret: 'abd6bacbf41945ae9a1735e089167829',
                spotifyAPI: 'https://api.spotify.com/v1/',
                redirect_uri: 'http://localhost:8888/callback',
                id_token: 'BQCTsGyV_KsP5P2Tg85ePabs3AcFAh_GR9PLj0kGIQ9A_IYrmWZe_4CdREem_7-XyAELjQCenPEQNmk6dRgDDMQrtsnNUe9SFHaNckFJWSFI5cItZ99YQzXZbFeh2gutABphAU0NajuPebfJptFW96iGMT2xmm8VCJH5J9sREMsguoWUi6WEtxsaU-8HBRPjxMNkbWBRtEf4gp8A5If68ycdiitZmP3vZzlcebrcjuPSfjJvfSiC0mM8G5Rf6ZvF4PXupjsRG8Z3jP4jt6WYysVVNmDdovuUGzW6dRFCw8AbcBV6Atm3ysgw7MkUnPCb',
        }
    }
});

module.exports = globalData;