
<template>
    <div class="m-text">
        <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" @keyup="inputing"></textarea>
    </div>
</template>


<script>
    import store from '../store/storeWild';
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data () {
            return {
                text: ''
            };
        },
        computed: {
                ...mapGetters(['session','sessionIndex'])  
        },
        methods: {
            inputing (e) {
                if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
                    var msg = this.text
                    store.setItem({
                        message:msg,
                        sessionIndex:this.sessionIndex
                    })
                    this.text = '';

                }
            }
        }
    };
</script>

<style lang="less">
    .m-text {
        height: 160px;
        border-top: solid 1px #ddd;
        
        textarea {
            padding: 10px;
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-family: "Micrsofot Yahei";
            resize: none;
        }
    }
</style>