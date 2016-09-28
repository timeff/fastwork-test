new Vue({
    el: '#app',
    data: {
        show:false,
        user:{},
        repos:[],
        error:''
    },
    methods:{
        getData:function(){
            var inputUser = this.inputUser.trim()
            axios.get('https://api.github.com/users/'+inputUser)
            .then(response=>{
                this.user=response.data
                this.show=true
                this.inputUser=''
                this.error=''
            })
            .then(()=>{
                axios.get('https://api.github.com/users/'+inputUser+'/repos')
                .then(response=>{
                    this.repos=response.data
                })
            })
            .catch(()=>{
                this.error=" Can't find your name Dude!"    
            })
        }
    }
})
