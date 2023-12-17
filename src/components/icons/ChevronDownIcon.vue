<template>
    <Icon :icon="['fas', 'chevron-down']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
