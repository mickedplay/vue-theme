<template>
    <Icon :icon="['far', 'square-plus']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
