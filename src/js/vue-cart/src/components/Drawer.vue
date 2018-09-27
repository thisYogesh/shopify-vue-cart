<template>
    <div 
        class="c-vueCart__Drawer"
        :class="{ 'c-vueCart__Drawer--isOpen': isOpen }"
    >
        <div class="c-vueCart__header">
            <p class="c-vueCart__title">Your Cart</p>
            <button class="c-vueCart__close" @click="closeDrawer">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 32 32"><path fill="#444" d="M25.313 8.55l-1.862-1.862-7.45 7.45-7.45-7.45L6.689 8.55l7.45 7.45-7.45 7.45 1.862 1.862 7.45-7.45 7.45 7.45 1.862-1.862-7.45-7.45z"/></svg>
            </button>
        </div>
        <a class="c-vueCart__checkout" href="/checkout">Checkout</a>
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDrawer() {
            this.$emit('drawerClosed')
        }
    }
}
</script>

<style>
    .c-vueCart__Drawer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        width: 365px;
        padding: 40px;
        background-color: #444;
        overflow-y: scroll;
        transform: translateX(100%);
        transition: transform .5s ease;
    }
    .c-vueCart__Drawer--isOpen {
        transform: translateX(0);
    }
    .c-vueCart__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .c-vueCart__title {
        margin: 0;
        color: black;
        font-size: 22px;
    }
    .c-vueCart__close {
        position: absolute;
        top: 30px;
        right: 20px;
    }
    .c-vueCart__close svg {
        width: 20px;
        height: 20px;
        color: black;
    }
    .c-vueCart__checkout {
        display: block;
        padding: 15px;
        background: black;
        color: white !important;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }
</style>