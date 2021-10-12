<template>

    <section> 
        <p></p>
        <div class="row title-container">
            <h2>SERVICIOS</h2>
        </div>

        <div class="content">

            <article class="post">
                <div class="sevicios1">
                    <img src="../assets/s1.jpeg" width="300">
                    <h3> PLÁSTICO RECICLADO SIN PROCESAR </h3>
                    <p> PET o PETE (Tereftalato de Polietileno), HDPE (Polietileno de alta densidad), LDPE (Polietileno de baja densidad) o PP (Polipropileno) seleccionados por cada tipo. </p>
                    <router-link to='/pagservicios1'>Comprar</router-link>
                </div>
            </article>
                            
            <article class="post">
                <div class="sevicios2">
                    <img src="../assets/s2.jpeg" width="300">
                    <h3> PLÁSTICO RECICLADO LIMPIO </h3>
                    <p> PET o PETE (Tereftalato de Polietileno), HDPE (Polietileno de alta densidad), LDPE (Polietileno de baja densidad) o PP (Polipropileno) seleccionados por cada tipo y lavados. </p>
                    <router-link to='/pagservicios2'>Comprar</router-link>
                </div>
            </article>
                
            <article class="post">
                <div class="servicios3">
                    <img src="../assets/s3.jpeg" width="300">
                    <h3> PLÁSTICO RECICLADO TRITURADO </h3>
                    <p> Plástico PET o PETE (Tereftalato de Polietileno), HDPE (Polietileno de alta densidad), LDPE (Polietileno de baja densidad) o PP (Polipropileno) seleccionados por cada tipo, lavados y triturados. </p>
                    <router-link to='/pagservicios3'>Comprar</router-link>
                </div>
            </article>
        </div>

        <p></p>
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

    

    
    
    .services-info {
        padding: 20px;
        text-align: center;
    }
   
   
    .services-info__imagen {
        border-radius: 50%;
        margin-right: auto;
        margin-left: auto;
    }

    

   

    
    .title-container {
        background-color:  #25294f;
        margin-bottom: 20px;
        
        padding: 10px 20px;
    }

    .title-container > h2{
        color: white;
        font-weight: bolder;

    }

    .servicio{
        text-align: center;
        background-color: #edf0facc
    }

    .servicio > img,h3 {
        margin-bottom: 20px;
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        
    }

  
    /* // X-Large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) { 
        
    }

    /* // XX-Large devices (larger desktops, 1400px and up) */
    @media (min-width: 1400px) { 
        
    }

    .post{
        box-shadow: 0 1px 6px 1px rgba(0,0,0,.1);
    transition: .2s;
    }
    .servicios{
    padding: 20px;
    text-align: center;
    background-color: #f7f7f7
}


</style>