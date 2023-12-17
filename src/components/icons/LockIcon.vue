<template>
    <Icon :icon="['fas', 'lock']" class="text-red-400" v-bind="$attrs"/>
</template>

<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    }
};
</script>
