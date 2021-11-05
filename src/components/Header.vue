<template>
<!-- inicio encabezado del sitio -->
    <header id="main-header">
		
		<a id="logo-header" href="#">
			<span class="site-name"><img src="../assets/logomarket.png"  width="140" ></span>
			<span class="site-desc"><h1>Recycled Plastic Place</h1></span>
            <p></p>
		</a> <!-- / #logo-header -->

		<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
                <li><router-link to="/divisionvendedor">Vende Tu Plastico</router-link> </li>
                <li><a href="https://login-empleados.herokuapp.com/">Login empleados</a> </li>
            </ul>
		</nav>
        
	</header>
<!-- fin encabezado del sitio -->
</template>

<script>
export default {
    
}
</script>

<style scoped>

    body {
        margin: 0;
        padding: 0;
        font-family: Helvetica, Arial, sans-serif;
        color: #446270;
        background: #f2f2f2c2; 
        font-size: 1em;
        line-height: 1.5em;
    }

    h1 {
        font-size: 2.3em;
        line-height: 1.3em;
        margin: 15px 0;
        text-align: center;
        font-weight: 300;
    }

    p {
        margin: 0 0 1.5em 0;
    }
    


    #main-header {
        background:#25294f;
        color: white;
        height: 80px;
    }	
    #main-header a {
        color: white;
    }


    #logo-header {
        float: left;
        padding: 15px 0 0 20px;
        text-decoration: none;
    }

        
    #logo-header .site-name {
        display: block;
        font-weight: 700;
        font-size: 1.2em;
    }

    #logo-header .site-desc {
        display: block;
        font-weight: 300;
        font-size: 0.8em;
        color: black;
        
    }
        


    nav {
        float: right;
    }
    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-right: 20px;
    }

    nav ul li {
        display: inline-block;
        line-height: 80px;
    }
        
    nav ul li a {
        display: block;
        padding: 0 10px;
        text-decoration: none;
    }
    /* color menu al seleccionar */
    nav ul li a:hover {
        background: #0f6caa;
    }
</style>