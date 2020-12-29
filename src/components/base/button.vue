<style lang="less">
.sun-button {
    font-size: 22px;
    color: red;
}
</style>

<template>
    <div
        class="sun-button"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SunButton'
};
</script>
