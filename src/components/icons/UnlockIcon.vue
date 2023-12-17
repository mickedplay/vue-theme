<template>
    <Icon :icon="['fas', 'unlock']" class="text-green-500" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
