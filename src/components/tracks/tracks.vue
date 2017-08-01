<template>
    <div>
          <div class="tracks">
            <track-detail class="tracks-item"  v-for="(item, idx) in albums" :key="idx" :albums="item"></track-detail>
        </div>
    </div>
</template>

<script>
    import trackDetail from "../track.vue";
    import globalData from "../../api.config.js";

    export default {
        name: 'tracks',
        extends: globalData,
        components: {
            trackDetail,
        },
        data: function () {
            return {
                albums: [],
                next: null,
                previous: null
            }
        },
        created() {
            this.myTracks();
        },
        watch: {
            '$route' (to,from) {},
        },
        methods: {
            myTracks: function() {
                var vm = this;

                 if ( typeof(next) == 'undefined' ) {
                    var savedTrackUrl = vm.spotifyAPI + 'me/albums' + '?limit=10';
                } else {
                    var savedTrackUrl = next;
                };

                vm.$http.get(savedTrackUrl, {headers: {Authorization: 'Bearer ' + vm.id_token }}).then(result => {
                vm.albums = vm.albums.concat(result.body.items);
                vm.next = result.body.next;
                    }, err => {
                        vm.error = true;
                        console.log('error')
                    });
            },
            filters: {}
        }
    }
</script>