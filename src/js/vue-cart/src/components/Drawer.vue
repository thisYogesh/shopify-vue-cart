<template>
    <transition name="slide">
        <div v-if="isOpen" class="c-vueCart__Drawer">
            <div class="c-vueCart__header">
                <p class="c-vueCart__title">Your Cart</p>
                <button class="c-vueCart__close" @click="closeDrawer">
                    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 32 32"><path fill="#fff" d="M25.313 8.55l-1.862-1.862-7.45 7.45-7.45-7.45L6.689 8.55l7.45 7.45-7.45 7.45 1.862 1.862 7.45-7.45 7.45 7.45 1.862-1.862-7.45-7.45z"/></svg>
                </button>
            </div>
            <CartContent />
        </div>
    </transition>
</template>

<script>
import CartContent from './CartContent.vue'

export default {
    name: 'Drawer',
    components: {
        CartContent
    },
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

<style scoped>
    .slide-enter, .slide-leave-to {
        transform: translateX(100%);
    }
    .slide-leave, .slide-enter-to {
        transform: translateX(0);
    }
    .c-vueCart__Drawer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        width: 365px;
        padding: 40px;
        background-color: #444;
        text-align: left;
        overflow-y: scroll;
        transition: transform .5s ease;
    }
    .c-vueCart__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .c-vueCart__title {
        margin: 0;
        color: white;
        font-size: 22px;
    }
    .c-vueCart__close {
        position: absolute;
        top: 30px;
        right: 20px;
        height: 32px;
        width: 32px;
        padding: 5px;
        border: none;
        outline: none;
        background: transparent;
    }
</style>