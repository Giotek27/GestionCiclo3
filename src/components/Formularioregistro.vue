<template>

    <section id="register services" class="form-register">
        <div class="row title-container">
            <h2>REGISTRO PARA COMPRA DE PLÁSTICO</h2>
        </div>

        <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre">
        <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido">
        <input class="controls" type="text" name="nit" id="NIT" placeholder="Ingrese su NIT">
        <input class="controls" type="text" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña">
    
            <button  type="submit" name="enviar" id="enviar">Enviar</button>
        </section>

</template>

<script>
export default {
    
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