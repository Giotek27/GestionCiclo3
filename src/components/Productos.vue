<template>

    <section> 
        <div class="content">

            <article class="post">
                <div class="producto1">
                    <img src="../assets/PETE.jpeg" width="300">
                    <h3> PET o PETE (Tereftalato de Polietileno) </h3>
                    <p> Es el plástico más común, el que encontramos en las botellas de agua y en tejidos. Resistente, de alta transparencia, bajo peso, impermeable y apto para uso alimentario. Es el más fácil de reciclar y también se puede reutilizar.</p>
                    <router-link to='/comprarplastico'>Comprar</router-link> 
                </div>
            </article>
                            
            <article class="post">
                <div class="producto2">
                    <img src="../assets/HDPE.jpeg" width="300">
                    <h3> HDPE (Polietileno de alta densidad) </h3>
                    <p> También se le conoce como PEAD. Es un plástico también muy presente en nuestro día a día. Más rígido que el anterior, de alta resistencia química y térmica, es el que se usa, por ejemplo, en los envases de detergentes líquidos, lácteos o en las garrafas de aceite. Se puede reciclar con facilidad y reutilizar. </p>
                    <router-link to='/comprarplastico'>Comprar</router-link>
                </div>
            </article>
        </div>

        <div class="content">
                
            <article class="post">
                <div class="producto3">
                    <img src="../assets/LDPE.jpeg" width="300">
                    <h3> LDPE (Polietileno de baja densidad) </h3>
                    <p> Otro plástico de uso frecuente que conforma, por ejemplo, bolsas y guantes de plástico, el papel film, el plástico de burbujas o botellas de agua. Se puede reutilizar, pero no siempre es posible reciclarlo. </p>
                    <router-link to='/comprarplastico'>Comprar</router-link>
                </div>
            </article>

            <article class="col-1 col-md-1 col-lg post">
                <div class="producto4">
                    <img src="../assets/PP.jpeg" width="300">
                    <h3> PP (Polipropileno) </h3>
                    <p> Es un plástico de bajo coste y fácil de moldear y colorear con el que se elaboran las tan criticadas pajitas de refresco, tapones de botellas o tupperwares, también otros envases alimentarios como los que albergan mantequilla, quesos frescos o yogures. Se puede reutilizar y es factible reciclarlo. </p>
                    <router-link to='/comprarplastico'>Comprar</router-link>
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
        background-color: #25294f;
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