<template>
    <section id="team" class="team-section"> <!-- EQUIPO -->
        <div class="row title-container">
            <h2>EQUIPO DE TRABAJO</h2>
        </div>

        <div class="content">

            <article class="post">
                <div class="team-body">
                    <img  id ="Sergio-img">
                    <span>Conocenos</span>
                    <h2>Sergio</h2>
                    <p>Soy Sergio Bedoya tengo 18 años. Estudiante de ingeniera mecánica. Me gusta el cine,
                    me gusta un poco todo lo relacionado con la tecnologia y la programacion. Soy un joven
                    con muchas ambiciones. Me gusta aprender cosas nuevas y me gusta hacer cosas nuevas.
                    </p>
                </div>
            </article>
                            
            <article class="post">
                <div class="team-body">
                    <img  id ="Camilo-img">
                    <span>Conocenos</span>
                    <h2>Camilo</h2>
                    <p>Soy Camilo Pizarro, biólogo de 43 años, apasionado de la biotecnología, nanotecnologia y TICs, 
                    por lo cual me he formado en estas áreas (maestrías en las dos primeras y autodidacta en la tercera) 
                    me encanta la naturaleza y la música, tengo 2 perros, un bebé.</p>
                </div>
            </article>
                
            <article class="post">
                <div class="team-body">
                    <img id="Magda-img">
                    <span>Conocenos</span>
                    <h2>Magda</h2>
                    <p>Soy Magda Del Pilar Santa Fajardo, tengo 36 años, ingeniera electrónica de la Universidad del Quindío, 
                    Especialista en "Gestión de la calidad y normalización técnica", en "Administración de negocios" y en 
                    "Gerencia de proyectos", Magíster en Administración de Negocios, actualmente estoy realizando 
                    la Maestría en Gerencia de Proyectos de la Universidad EAFIT.</p>
                    <p>Me gusta el cine y la conservación del medio ambiente.</p>
                </div>
            </article>
                            
            <article class="post">
                <div class="team-body">
                    <img  id="Angela-img">
                    <span>Conocenos</span>
                    <h2>Angela</h2>
                    <p>Exercitation ad quis veniam ullamco. Dolore velit 
                    in incididunt eiusmod. Exercitation officia laborum duis ex do adipisicing labore. 
                    Enim proident commodo occaecat occaecat amet laboris velit cillum. 
                    Laboris est in do nulla aliquip laboris velit laboris qui duis nulla ullamco. 
                    Sunt nisi dolore ut fugiat reprehenderit non laboris id et. Id cillum non anim voluptate..</p>
                </div>
            </article>
        
            <article class="post">
                <div class="team-body">
                    <img  id ="Edwin-img">
                    <span>Conocenos</span>
                    <h2>Edwin</h2>
                    <p>Soy Edwin Galindo, barranquillero de 39 años, programador de computadores, 
                    fotógrafo aficionado, me gusta el rock, las películas de ciencia ficción, 
                    suspenso.</p>
                </div>
            </article>
        </div>
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

.header-section {
    margin-bottom: 100px;
    font-weight: bold;
    color: green;
}

.header-container{
    justify-content: space-around;
    text-align: center;
    
}
.site-nav {
    justify-content: space-around;
    align-content: center;
}
.site-nav>a {
    color: #4caecc;
    text-decoration: none;
}
.site-nav>a:hover {
    text-decoration: underline;
    font-weight: bold;
}

.logo-container {
    margin-bottom: 50px;
}
.logo-container__site-logo {
    height: 110px;
}
.news-section{
    background-color: #edf0facc
}
.news-section {
    flex-wrap: wrap;
}
.services-info {
    padding: 20px;
    text-align: center;
}
.news-info {
    width: 50%;
    padding: 20px;
}
.news-header {
    display: flex;
    justify-content: space-around;
}
.news-info__title {
    align-self: center;
}
.services-info__imagen {
    border-radius: 50%;
    margin-right: auto;
    margin-left: auto;
}

.banner>img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    padding-left: 0;
    padding-right: 0;
}

.footer-section {
    background-color: #25294f;
    color: white;
    justify-content: space-evenly;
    text-align: center;
}

.footer-section > div{
    padding-top: 20px;
}

.footer-section > div> article{
    margin-bottom: 20px;
}

.footer-section > div>article > h3{
    font-weight: bold;
    margin-bottom: 20px;
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

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .banner>img {
        height: 400px;
    }

    .footer-section {
        text-align: left;
    }
 }

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    
 }

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { 
    
 }



/* // SECCION EQUIPO */

.Integrantes-list{
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 2em;
}
.menu{
    display:grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: end;
    padding: 40px;
    background-color: aqua;
}
.content{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: minmax(100px,auto);
    grid-gap: 20px;
    max-width: 1000px;
    margin:auto;
    gap: 2em;
    align-items: start;
    padding: 40px;
}

.post{
    box-shadow: 0 1px 6px 1px rgba(0,0,0,.1);
    transition: .2s;
}
.post:hover{
    transform: translateY(-4px);
    box-shadow: 0 1px 6px 1px rgba(0,0,0,.15);
}

.post-header{
    width: 100%;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
}

.post:hover .Item1-img{
    transform: scale(1.1);
}
.post:hover .Item2-img{
    transform: scale(1.1);
}
.post:hover .Item3-img{
    transform: scale(1.1);
}

.team-body{
    padding: 20px;
    text-align: center;
    background-color: #f7f7f7
}

.team-body span{
    display: inline-block;
    color: coral;
    margin-bottom: 10px;
}

.team-body h2{
    margin-bottom: 15px;
}

.team-body p{
    line-height: 1.5;
    margin-bottom: 20px;
}

#Sergio-img{
    background: url("../assets/Sergio.jpeg");
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: center;
}
#Camilo-img{
    background: url("../assets/Camilo.jpeg");
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: top;
}
#Angela-img{
    background: url("../assets/Angela.jpeg");
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: top;
}
#Edwin-img{
    background: url("../assets/Edwin.jpeg");
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: center;
}
#Magda-img{
    background: url("../assets/Magda.jpeg");
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: center;
}
</style>