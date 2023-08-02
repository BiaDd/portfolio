<template>
    <div class="tabs">
        <ul class="selectors">
            <li v-for="(tab, index) in tabList" :key="index" class="tabs_item" v-on:click="submit(index)" :class="{'selected': index + 1 === activeTab}">
                <p class="tab-label">{{ tab }}</p>
            </li>
        </ul>
        <div class="tabsContent">
            <template v-for="(tab, index) in tabList">
                <div :key="index" v-if="index + 1 === activeTab" class="content">
                    <slot :name="`tabPanel-${index + 1}`" />
                </div>
            </template>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

export default {
    props: {
        tabList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            activeTab: 1,
        };
    },
    methods: {
        submit(index) {
            this.activeTab = index+1;
        }
    }
};
</script>

<style>
/* .selectors {
    border-left: 2px solid var(--vp-c-white);
} */

.selectors:hover {
    cursor: pointer;
}

.tabs_item {
    display: flex;
    align-items: center;
    height: 50px;
    color: var(--vp-button-brand-text);
}

.tabs_item:hover {
    background-color: var(--vp-c-brand-light);
    border-left: 4px solid green;
}

.tabs_item:hover p {
    color: var(--vp-button-brand-active-text);
}

.tab-label {
    margin: 10px;
    color: var(--vp-c-text-1);
}

.selected {
    background-color: var(--vp-c-brand-light);
}

.selected p {
    color: var(--vp-button-brand-active-text);
}

.tabs {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    justify-items: start;
}

.tabsContent {
    margin-left: 15%;
}

.company {
    font-size: 1.2rem;
}

.tabsContent .content p {
    font-style: italic;
}
</style>