<template>
    <Icon :icon="['fas', 'link']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
