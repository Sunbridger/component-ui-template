<style lang="less">
.pg-app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .component-wrapper {
        .fixed(0, 0, 0, 0);
    }
    .slide-right-enter {
        transform: translateX(100vw);
    }
    .slide-right-enter-active {
        transition: .6s all ease-in;
    }
    .slide-right-leave {
        transform: translateX(0);
    }
    .slide-right-leave-active {
        transform: translateX(100vw);
        transition: .6s all ease-out;
    }
}
</style>

<template>
    <div class="pg-app">
        <co-header title="test-sdk"></co-header>
        <vue-scrollbar class="flex1">
            <div class="modules"
                v-for="item in modules"
                :key="item.name">
                <div class="module-title padding12 text-bold bg-background-block">{{item.alias}}</div>
                <ul>
                    <router-link tag="li"
                        class="padding12 border-bottom flex flex-justify-between flex-align-center cursor"
                        v-for="component in item.children"
                        :key="component.name"
                        :to="`/${component.name}`">
                        <span>{{component.name | title}}</span>
                        <i class="el-icon-arrow-right link-icon"></i>
                    </router-link>
                </ul>
            </div>
        </vue-scrollbar>
        <transition name="slide-right">
            <router-view class="component-wrapper"></router-view>
        </transition>
    </div>
</template>

<script>
import CoHeader from 'examples/components/common/header';
import componentNav from 'doc/map/component-nav.json';
import { title } from 'examples/core';

const { modules } = componentNav.find(item => item.name === 'components');

export default {
    name: 'app',
    data() {
        return {
            modules,
            transitionName: '',
            mode: ''
        };
    },
    components: {
        CoHeader
    },
    filters: {
        title(str) {
            return title(str);
        }
    }
};
</script>
