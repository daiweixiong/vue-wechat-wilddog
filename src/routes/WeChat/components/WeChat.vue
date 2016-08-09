<template>
    <div class="wrap">
    <div id="chat">
        <div class="sidebar">
            <card></card>
            <list></list>
        </div>
        <div class="main">
            <message></message>
            <text></text>
        </div>
    </div>
    </div>
</template>

<script>
    import store from '../store/storeWild';
    import Card from './Card.vue';
    import List from './List.vue';
    import Text from './Text.vue';
    import Message from './Message.vue';

    import { mapActions, mapGetters } from 'vuex'

    export default {
       created () {
           store.on('update', this.update)
       },
       methods: {
           ...mapActions(['update'])
       },
        components: {
            Card, List, Text, Message
        }
    };

</script>

<style lang="less">
        .wrap{
            height:100%;
            overflow: hidden;
            border-radius: 3px;
            color: #4d4d4d;
            font: 14px/1.4em 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial, sans-serif;
            background: #f5f5f5 url('../assets/bg.jpg') no-repeat center;
            background-size: cover;
            font-smoothing: antialiased;

            .sidebar, .main {
                height: 100%;
            }
            .sidebar {
                float: left;
                width: 200px;
                color: #f4f4f4;
                background-color: #2e3238;
            }
            .main {
                position: relative;
                overflow: hidden;
                background-color: #eee;
            }
            .m-text {
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
            }
            .m-message {
                height: ~'calc(100% - 160px)';
            }
            #chat {
                margin: 20px auto;
                width: 800px;
                height: 600px;
            }
        }
</style>