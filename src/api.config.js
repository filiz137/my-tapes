import Vue from 'vue';

var globalData = Vue.extend({
    data: function () {
        return {
                client_id: 'ec5b37e8f5744f93866f7463c83989a6',
                client_secret: 'abd6bacbf41945ae9a1735e089167829',
                spotifyAPI: 'https://api.spotify.com/v1/',
                redirect_uri: 'http://localhost:8888/callback',
                id_token: 'BQD8ETI8BDVfCtOrGt2pv-KK2PY9ZsPjjb3xfyxRiArxynIzCQmmHuBW3t4NUdo0dN_yq_JZ_v7FTO3hhiuQdn2E1PwqGC3dD6khxTfLCTk5XXZshvckLKG9Qd_6FjekZWgcGZZZKuir-K-fOMAw4KKdM2w21BEUUT5xlKYpM481XTq4G1vnc4-TK-YDzquYxLSO72VgRzVb8kyjMJ1haLMzXE1J46a0iQPLMdD02hnxgvGUJ6x-wVpFgNA9-P0MDdk8YWtPzIMEaNjDqYfN4gwTs1B1GNcoyIUWYJRaJUCniseY5HwkMWk4fhSGKeu6',
        }
    }
});

module.exports = globalData;