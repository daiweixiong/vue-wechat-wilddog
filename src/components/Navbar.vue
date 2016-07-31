<template>
  <nav class="header cov-nav">
    <template v-for="route in _routes">
      <div :class="['nav-tab','r-'+route.name]" @click="navRoute($event, route.name, $index + 1)">
        {{route.title}}
      </div>
    </template>
    <div class="nav-rail">
      <span class="nav-moving" :style="covNav.moving"></span>
    </div>
  </nav>
</template>

<script>
  // v-link="{ exact: true , path: father + route.path }"   
  export default {
    name: 'v-navbar',
    props: {
      routes: {
        type: Object,
        default () {
          return {}
        }
      },
      father: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        covNav: {
            navMap: {},
            currentX: 0,
            moving: {
                width: '8px',
                transform: 'translateX(0px)'
            }
        }
      }
    },
    ready () {
        this.initNav()
    },
    methods:{
        navRoute (e, name, index){
          this.touchNav(e, index, () => {
              this.$route.router.go({name: name})
          })
        },
        initNav () {
            let nodes = document.getElementsByClassName('nav-tab'),
                curNode = document.getElementsByClassName('r-'+this.$route.name)[0]

            for(let i in nodes){
              if(nodes[i] === curNode){
                  let x = curNode.clientWidth * (+(i)+1 - 0.5)
                  this.covNav.moving = {
                      width: '8px',
                      transform: `translateX(${x}px)`
                  }
                  break
              }
            }
        },
        moving (w, x) {
            this.covNav.currentX = x
            this.covNav.moving = {
                width: w + 'px',
                transform: `translateX(${x - w}px)`
            }
        },
        touchNav (e, index, after) {
            let x = e.target.clientWidth * (index - 0.5)
            this.moving(e.target.clientWidth * 0.8 + x * 0.05, x + e.target.clientWidth * 0.5 + x * 0.05)
            this.$nextTick(() => {
                setTimeout(() => {
                    this.covNav.moving = {
                        width: '8px',
                        transform: `translateX(${x}px)`
                    }
                    after()
                }, 100)
            })
        }
      },
      computed: {
          _routes () {
            return walkRoutes(this.routes)
          }
      }
    }

    function walkRoutes (routes) {
      return Object.keys(routes)
      .filter(key => !routes[key].hidden)
      .map(key => {
        const route = routes[key]
        return {
          path : route.path || key,
          name : route.name,
          title: route.title
        }
      })
    }
</script>

<style src="styles/components/navbar"></style>