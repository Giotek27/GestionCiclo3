<template>
<div>
    
    <form @submit.prevent="actualizartabla" :v-model="editarusuario">
        <label>Nombre:</label>
        <input type="text" v-model="datos.nombre"><br>
        <label>Nit:</label>
        <input type="number" v-model="datos.Nit"><br>
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
        <button>GuardarCambios</button>
        
    </form>
    <div>
    <router-link :to="{name:'vendedoresjuridicos'}" class="btn-btn-summary" >Regresar</router-link>
    </div>
</div>

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
                  
              },
              editarusuario:''
          }
        }, 
        created(){
            let apiURL=`https://backend54-7.herokuapp.com/buscavendedorJuridico/${this.$route.params.id}`;
            axios.get(apiURL).then((res)=>{
                this.datos=res.data;
            });
        },
        methods:{
            //este metodo actualiza la tabla que está en heroku
            actualizartabla(){
                axios.put(`https://backend54-7.herokuapp.com/actualizarVendedorJ/${this.$route.params.id}`,this.datos).then(()=>alert("Se actualizo correctamente"));
            }  
        }
    } 
</script>