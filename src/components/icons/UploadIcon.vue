<template>
    <Icon :icon="['fas', 'cloud-arrow-up']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
