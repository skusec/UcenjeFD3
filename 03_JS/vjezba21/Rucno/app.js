const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac: 10,
            upozori: false
        }
    },
    methods:{
        uvecaj(){
            this.upozori = false;
            this.brojac++;
        },

        umanji(){
            if(this.brojac === 0){
                this.upozori = true;
                return;
            }

            this.upozori = false;
            this.brojac--;
        },

        uvecajDva(){
            this.upozori = false;
            this.brojac += 2;
        },

        umanjiDva(){
            if(this.brojac < 2){
                this.upozori = true;
                return;
            }

            this.upozori = false;
            this.brojac -= 2;
        }
    }
}).mount('#app');