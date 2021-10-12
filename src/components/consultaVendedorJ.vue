<template>
    <form @submit.prevent="enviarBackendN">
        <label>Nombre:</label>
        <input type="text" v-model="datos.nombre"><br>
        <label>Cedula:</label>
        <input type="number" v-model="datos.cedula"><br>
        <label>Correo:</label>
        <input type="text"  v-model="datos.correo"><br>
        <label>telefono:</label>
        <input type="number"  v-model="datos.telefono"><br>
        <label>Direccion:</label>
        <input type="text"  v-model="datos.direccion"><br>
        <label>Ciudad:</label>
        <input type="text"  v-model="datos.ciudad"><br>
        <label>Tipo plastico:</label>
        <input type="text"  v-model="datos.Tipo_plastic"><br>
        <label>Estado de el plastico:</label>
        <input type="text"  v-model="datos.estado_plastic"><br>
        <label>Cantidad de Plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic"><br>
        <button>Enviar</button>
    </form>
</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              datos:{
                  nombre:"",
                  Nit:1234567,
                  correo:"",
                  telefono:1234567,
                  direccion:"",
                  ciudad:"",
                  Tipo_plastic:"",
                  cantidad_plastic:10,
                  estado_plastic:""
                  
              }
          }
        }, 
        created(){
            let apiURL=`https://backend54-7.herokuapp.com/buscavendedorJuridico/${this.$route.params.id}`;
            axios.get(apiURL).then((res)=>{
                this.datos=res.data;
            });
        },
    } 
</script>