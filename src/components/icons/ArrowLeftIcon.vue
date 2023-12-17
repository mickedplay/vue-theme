<template>
    <Icon :icon="['fas', 'arrow-left']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
