<template>
    <Icon :icon="['far', 'eye']" class="text-gray-700" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
