new Vue({
    el: '#app',
    data: {
        show:false, // Boolean for triggle result on view page
        user:{},
        repos:[],
        error:'' // Error text
    },
    methods:{
        getData:function(){
            var inputUser = this.inputUser.trim()

            //API CALL - User Data
            axios.get('https://api.github.com/users/'+inputUser)
            .then(response=>{
                this.user=response.data
                this.inputUser=''

                // Show the result and hide error text
                this.show=true
                this.error=''
            })
            .then(()=>{
                //API-CALL Repos Data
                axios.get('https://api.github.com/users/'+inputUser+'/repos')
                .then(response=>{
                    this.repos=response.data
                })
            })
            .catch(()=>{
                //In case there is an error
                this.error=" Can't find your name Dude!"    
            })
        }
    }
})
