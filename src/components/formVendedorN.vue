<template>
<div>
    <section id="register services"> <!-- VENDEDORES DE PLÁSTICO -->
        <div class="row title-container" align=center>
            <h2>Vendedor natural</h2>
        </div>
    <form class="form-register" @submit.prevent="enviarBackendN">
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" v-model="datos.nombre" required>
            <input class="controls" type="number" name="nit" id="NIT" placeholder="Ingrese su Cedula" v-model="datos.cedula">
            <input class="controls" type="text" name="correoelectronico" id="correoelectronico" placeholder="Ingrese correo electrónico de contacto" v-model="datos.correo" required>
            <input class="controls" type="number" name="telefono" id="telefono" placeholder="Ingrese teléfono de contacto" v-model="datos.telefono" required>
            <input class="controls" type="text" name="direccion" id="direccion" placeholder="Ingrese dirección de despacho" v-model="datos.direccion" required>
            <input class="controls" type="text" name="ciudad" id="ciudad" placeholder="Ingrese ciudad de despacho" v-model="datos.ciudad" required>
            <input class="controls" type="text" name="tipoplasticos" id="tipoplasticos" placeholder="Ingrese el tipo de plástico a comprar: PET, HDPE,LDPE o PP" v-model="datos.Tipo_plastic" required>
            <input class="controls" type="text" name="estadoplasticos" id="estadoplasticos" placeholder="Ingrese el estado del plástico a comprar: SIN PROCESAR, LIMPIO o TRITURADO" v-model="datos.estado_plastic" required>

            <input class="controls" type="number" name="cantidad" id="cantidad" placeholder="Ingrese cantidad a comprar (kilogramos)" v-model="datos.cantidad_plastic" required>
            <button  type="submit" name="enviar" id="enviar">Enviar</button>
            <div>
              <router-link class="btn-btn-danger" :to="{name:'Divisionvendedor'}">Regresar</router-link>
            </div>
    </form>
    </section>
    
</div>
     
</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              datos:{
                  nombre:"",
                  cedula:'',
                  correo:"",
                  telefono:'',
                  direccion:"",
                  ciudad:"",
                  Tipo_plastic:"",
                  estado_plastic:"",
                  cantidad_plastic:''
              }
          }
        },
        methods:{
            enviarBackendN(){
                axios.post("https://backend54-7.herokuapp.com/creacionVendedor",this.datos).then(()=>alert("Su formulario se ha enviado correctamente, dele al boton de regresar"));
            }
        } 
    }  
</script>