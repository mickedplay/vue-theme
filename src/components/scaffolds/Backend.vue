<template>
    <div class="app-container w-full h-screen grid overflow-hidden default-transition
                grid-cols-[4rem,1fr] lg:grid-cols-[16rem,1fr] grid-rows-[4rem,1fr,5rem] lg:grid-rows-[4rem,1fr,3rem]"
    >
        <slot name="logo"/>
        <slot name="topbar"/>

        <slot name="sidebar"/>
        <slot name="main"/>

        <slot name="footer"/>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-container {
    grid-template-areas:
		"logo topbar"
		"menu main"
		"footer main";
}
</style>
