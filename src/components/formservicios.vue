<template>
<div>
    <form @submit.prevent="enviarBackendN">
        <label>Tipo de servicio</label>
        <input type="text"  v-model="datos.Tipo_servicio"><br>
        <label>Tipo de el plastico:</label>
        <input type="text"  v-model="datos.Tipo_plastic"><br>
        <label>Cantidad de Plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic"><br>
        
        
        <button>Enviar</button>
       <div>
        <router-link class="btn-danger" :to="{name:'servicios'}">Regresar</router-link>
    </div>
    </form>
    
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
                  cantidad_plastic:"",
                  
              }
          }
        },
        methods:{
            enviarBackendN(){
                axios.post("https://backend54-7.herokuapp.com/creacionservicios",this.datos).then(()=>alert("Producto creado"));
            }
        } 
    }  
</script>