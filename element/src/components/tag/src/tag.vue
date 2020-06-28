<template>
    <transition :name="disableTransitions ? '' : 'fade'">
        <span
            v-if="show"
            @click="handleClick"
            :style="{backgroundColor: color}"
            :class="classes">
            <slot></slot>
            <i v-if="closable" @click="handleClose">x</i>
        </span>
    </transition>
</template>

<script>
export default {
    name: 'ElTag',
    data() {
        return {
            show: true
        }
    },
    props: {
        type: String,
        closable: Boolean,
        disableTransitions: Boolean,
        hit: Boolean,
        color: String,
        size: String
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        },
        handleClose(event) {
            event.stopPropagation()
            this.$emit('close', event)
            this.show = false
        }
    },
    computed: {
        classes() {
            const { type, size, hit } = this
            return [
                'el-tag',
                type ? `el-tag--${type}` : '',
                size ? `el-tag--${size}` : '',
                hit && 'is-hit'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
span {
    display: inline-block;
    padding: 0 10px;
    height: 32px;
    line-height: 30px;  
    border-radius: 4px;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid rgba(64,158,255,.2);
}
i {
    margin-left: 4px;
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    color: #409eff;
    position: relative;
    cursor: pointer;
    left: 3px;
    &:hover {
        background: rgb(50, 132, 199);
        color: #fff;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>