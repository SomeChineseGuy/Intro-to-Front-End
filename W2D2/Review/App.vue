<template lang="pug">
    <div v-if="loading">
        <span>loading...</span>
    </div>
    <div v-else>
         <div class="video-grid">
            <Category-List v-for="category in categories" v-bind:key="category.id" v-bind:category="category"></Category-List>
            <div class="video-row row-about">
                <div class="about-col vf-col-1">
                    <video autoplay class="tile__video" :poster="dave" :src="video"></video>
                </div>
                <div class="about-col vf-col-2">
                    <img :src="logo" />
                    <Meta-Actions :video="video" />
                    <h3>The Riptide Process</h3>
                    <p>From conceptualizing, storyboarding, and planning to casting, travelling, filming, and editing, the Riptide video production process is efficient and exciting!</p>
                </div>
            </div>
            <Video-Slider :initial-posts="posts" :position="category.id" >
               <Video-brand
                    :post="post"
                    :position="position"
                    :key="post.id"
                    v-on:modal-open="openModal"
                    :open="open"
                ></Video>
            </Video-Slider>
        </div>

    </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
import MetaActions from './components/MetaActions.vue';
import { mapState } from 'vuex';
import logo from "../images/riptide.png";
import dave from "../images/about-riptide.png";

export default {
    name: 'App',
    data() {
        return {
            logo: logo,
            dave: dave,
            video: 'https://player.vimeo.com/external/329159033.hd.mp4?s=9542952f2a00805cd93b373a38e006d71ae091d3&profile_id=175',
        }
    },
    components: {
        CategoryList,
        MetaActions,
    },
    methods: {
        enlarge(event) {
            event.currentTarget.classList.add('large');
        },
    },
    created() {
        this.$store.dispatch('loadPosts');
        this.$store.dispatch('loadCategories');
    },
    computed: mapState([
        'posts',
        'categories',
        'loading'
    ])
}
</script>
