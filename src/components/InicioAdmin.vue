<template>
    <div>
        <h1>Bienvenido!!</h1>
        <h3>Selecciona la tabla a la que deseas acceder</h3>
        <b-container class="columnas" fluid="md">
            <b-row align-v="center" cols="2">
                <b-col ><b-card
                    title="Vendedores naturales"
                    tag="article"
                    align="center"
                    
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    Acá se encuentran todos los vendedores naturales registrados en el sistema.
                </b-card-text>

                <b-button :to="{name: 'vendedoresnaturales'}" variant="success">ir a esta tabla</b-button>
                </b-card ></b-col>
                <b-col><b-card
                    title="Vendedor Jurídico"
                    align="center"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                   Acá se encuentran todos los vendedores Juridicos registrados en el sistema.
                </b-card-text>

                <b-button :to="{name: 'vendedoresjuridicos'}" variant="success">ir a esta tabla</b-button>
                </b-card></b-col>
                <b-col><b-card
                    title="Servicios"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    Acá se encuentran todos los productos que tenemos en inventario para poder comercializarlos
                    en la página.
                </b-card-text>

                <b-button :to="{name: 'servicios'}" variant="success">ir a esta tabla</b-button>
                </b-card></b-col>
                <b-col><b-card
                    title="Ventas"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    Acá se encuentra el registro de todas las ventas que se han realizado.
                </b-card-text>

                <b-button :to="{name: 'ventas'}" variant="success">ir a esta tabla</b-button>
                </b-card></b-col>
            </b-row>
        </b-container>
    </div>
</template>


<style scoped>
.h1{
    color: green;
}
</style>