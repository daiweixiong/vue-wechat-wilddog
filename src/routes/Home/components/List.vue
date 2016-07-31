<template>
    <section class="list">
        <v-loading v-show='!articles.length'></v-loading>
        <v-article v-for="data in articles" :data="data" transition="fade"></v-article>
    </section>
</template>

<script>
    import vArticle from './Article'
    import vLoading from 'coms/Loading'

    export default {
        props: {
            'articles': {
                type: Array,
                required: true
            },
            date: {
                type: String,
                default () {
                    return ''
                }
            }
        },
        components: {
            vArticle,
            vLoading
        }
    }
</script>
<style>
    .list {
        position: relative;
        padding: 0;
        padding-bottom: 2rem;
        /*border-bottom: 1px solid #ECECEC;*/
    }
    
    .list-date {
        position: absolute;
        font-size: 2rem;
        text-align: center;
        top: 2rem;
        left: 1rem;
        color: #b2bac2;
        font-weight: 500;
    }
</style>