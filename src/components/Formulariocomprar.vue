<template>

    <section id="register services"> <!-- VENDEDORES DE PLÁSTICO -->
        <div class="row title-container">
            <h2>CARRITO DE COMPRA</h2>
        </div>
    <form class="form-register" @submit.prevent="enviarBackendN">
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" v-model="datos.nombre" required>
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" v-model="datos.apellido" required>
            <input class="controls" type="number" name="nit" id="NIT" placeholder="Ingrese su NIT" v-model="datos.Nit">
            <input class="controls" type="text" name="correoelectronico" id="correoelectronico" placeholder="Ingrese correo electrónico de contacto" v-model="datos.correo" required>
            <input class="controls" type="number" name="telefono" id="telefono" placeholder="Ingrese teléfono de contacto" v-model="datos.telefono" required>
            <input class="controls" type="text" name="direccion" id="direccion" placeholder="Ingrese dirección de despacho" v-model="datos.direccion" required>
            <input class="controls" type="text" name="ciudad" id="ciudad" placeholder="Ingrese ciudad de despacho" v-model="datos.ciudad" required>
            <input class="controls" type="text" name="tipoplasticos" id="tipoplasticos" placeholder="Ingrese el tipo de plástico a comprar: PET, HDPE,LDPE o PP" v-model="datos.Tipo_plastic" required>
            <input class="controls" type="text" name="estadoplasticos" id="estadoplasticos" placeholder="Ingrese el estado del plástico a comprar: SIN PROCESAR, LIMPIO o TRITURADO" v-model="datos.estado_plastic" required>

            <input class="controls" type="number" name="cantidad" id="cantidad" placeholder="Ingrese cantidad a comprar (kilogramos)" v-model="datos.cantidad_plastic" required>
    
            <input class="controls" type="text" name="formadepago" id="formadepago" placeholder="Ingrese la forma de pago: PSE o TARJETADECREDITO" v-model="datos.forma_pago" required>

            <button  type="submit" name="enviar" id="enviar">Enviar</button>
            <div>
              <router-link class="btn-btn-danger" :to="{name:'Home'}">Regresar</router-link>
            </div>
    </form>
    </section>

</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              datos:{
                  nombre:"",
                  apellido:"",
                  Nit: '',
                  correo:"",
                  telefono:'',
                  direccion:"",
                  ciudad:"",
                  Tipo_plastic:"",
                  estado_plastic:"",
                  cantidad_plastic:'',
                  forma_pago:""
                  
              }
          }
        },
        methods:{
            enviarBackendN(){
                axios.post("https://backend54-7.herokuapp.com/creacionventas",this.datos).then(()=>alert("Acción realizada con exito, dele al boton de regresar"));
            }
        } 
    }  
</script>

<style>
    
    body{
        min-width: 375px;
        font-family: cursive
    }


.form-register {
  width: 1300px;
  background: white;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: 'calibri';
  color: white;
  box-shadow: 7px 13px 37px #000;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: white;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-family: 'calibri';
  font-size: 18px;
  color: black;
}

.form-register p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}

.form-register a {
  color: black;
  text-decoration: none;
}

.form-register a:hover {
  color: white;
  text-decoration: underline;
}




</style>