<template>
    <Icon :icon="['far', 'floppy-disk']" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
