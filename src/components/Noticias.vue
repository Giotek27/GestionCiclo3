<template>
    <section>

        <div class="row title-container">
            <h2>NOTICIAS</h2>
        </div>
        
        <section id="noticias-info" class="noticias-section">
            
            <article class="noticias-info">
                <img class="centrado" src="../assets/iq.jpeg" alt="">
                <h2 class="noticias-info__title"> Como reciclar </h2>
                <router-link to='/pagnoticia1'>Ver</router-link> 
                <p class="noticias-info__text">El reciclado de plástico es el proceso de recuperación de desechos de plásticos. Las tres principales finalidades del plástico reciclado son la reutilización directa, el aprovechamiento como materia prima para la fabricación de nuevos productos y su conversión como combustible o como nuevos productos químicos. Para conocer mas acerca de como debes reciclar da click aqui.</p>
            </article>

            <article class="noticias-info">
                <img class="centrado" src="../assets/ima.jpeg" alt="">
                <h2 class="noticias-info__title"> Reglas para residuos de envases y empaques </h2>
                <router-link to='/pagnoticia2'>Ver</router-link> 
                <p class="noticias-info__text">Para 2030, todas las compañías deberán cumplir con una meta de aprovechamiento de sus residuos al 30%, según la resolución 1407 de 2018.</p>
            </article>

            <article class="noticias-info">
                <img class="centrado" src="../assets/rec.jpeg" alt="">
                <h2 class="noticias-info__title"> PET en la industria textil </h2>
                <router-link to='/pagnoticia3'>Ver</router-link> 
                <p class="noticias-info__text"> Reciclar el PET para prendas: una propuesta para el cambio.</p>
            </article>

             <article class="noticias-info">
            <img class="centrado" src="../assets/pet.jpeg" alt="" height="280">
            <h2 class="noticias-info__title"> Otros usos del PET </h2>
            <router-link to='/pagnoticia4'>Ver</router-link> 
            <p class="noticias-info__text"> Nuevo reciclaje de botellas PET favorece fabricación sostenible de neumáticos.
            </p>
            </article>
 
        </section>

    </section>
</template>

<script>
export default {
    
}
</script>

<style>
        
        
    

    body {
        max-width: 1400px;
        min-width: 375px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 0;
        margin-bottom: 0;
        color: #222222;
        font-size: 1em;
    }
    p{
        text-align: justify;
    }
    
    h2{
        text-align: center;
    }
    
    .noticias-section
        {
        display: flex;
        margin-bottom: 100px;
    }

    .noticias-info {
        padding: 20px;
        text-align: justify;
    }

    .news-info__title {
        align-self: center;
    }
    .centrado{
        margin:10px auto;
        display:block;
        }  
</style>