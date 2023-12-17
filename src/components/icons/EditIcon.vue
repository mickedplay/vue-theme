<template>
    <Icon :icon="['far', 'pen-to-square']" class="text-orange-500" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
