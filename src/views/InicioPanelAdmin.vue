<template>
    <div>
        <inicioAdmin/>
        <b-container class="columnas" fluid="md">
            <b-row align-v="center" cols="2">
                <b-col><b-card
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <b-card-text>
                            Dale click al boton de abajo para cerrar sesion.
                    </b-card-text>

                    <b-button @click="cerrarSesion()" variant="success">Cerrar sesion</b-button>
                </b-card></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

import inicioAdmin from '../components/InicioAdmin.vue'
export default{
    beforeCreate(){
        
        var autenticacion =window.localStorage.getItem("autenticacion");
        console.log("autenticación está "+autenticacion);
        if(autenticacion !== 'ok'){
            this.$router.push({path:'/login'})
        }
    },
    components:{
        inicioAdmin
    },
    methods:{
        cerrarSesion(){
            window.localStorage.removeItem("autenticacion");
            this.$router.push({path:'/login'})
        }
    }
};
</script>
