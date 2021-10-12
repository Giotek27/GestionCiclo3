<template>
<div>
    
    <form @submit.prevent="actualizartabla" :v-model="editarusuario">
        <label>Tipo servicio:</label>
        <input type="text"  v-model="datos.Tipo_servicio"><br>
        <label>Tipo plastico:</label>
        <input type="text"  v-model="datos.Tipo_plastic"><br>
        <label>cantidad de plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic"><br>
        <button>GuardarCambios</button>
        
    </form>
    <div>
    <router-link :to="{name:'servicios'}" class="btn-btn-summary" >Regresar</router-link>
    </div>
</div>

</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              datos:{
                  Tipo_servicio:"",
                  Tipo_plastic:"",
                  cantidad_plastic:10,
                  
                  
              },
              editarservicios:''
          }
        }, 
        created(){
            let apiURL=`https://backend54-7.herokuapp.com/buscarservicios/${this.$route.params.id}`;
            axios.get(apiURL).then((res)=>{
                this.datos=res.data;
            });
        },
        methods:{
            //este metodo actualiza la tabla que está en heroku
            actualizartabla(){
                axios.put(`https://backend54-7.herokuapp.com/actualizarServicios/${this.$route.params.id}`,this.datos).then(()=>alert("Se actualizo correctamente"));
            }  
        }
    } 
</script>