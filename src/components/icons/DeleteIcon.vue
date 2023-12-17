<template>
    <Icon :icon="['far', 'trash-can']" class="text-red-400" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
