<template>
    <fa :icon="icon" fixed-width :class="{['fa-' + size]: size}"/>
</template>

<script>
export default {
    props: {
        icon: {
            type: Array,
            required: true
        },
        size: {
            type: String,
            required: false,
            validator: (value) => ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl'].includes(value)
        }
    }
};
</script>
