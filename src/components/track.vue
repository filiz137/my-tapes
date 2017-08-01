<template>
    <div>
        <span>
         {{ albums.track.name}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'trackDetail',
        props: ['tracks']
    };
</script>