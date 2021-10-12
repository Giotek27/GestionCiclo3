<template>
<div>
<h1>Tabla de datos de vendedores Juridicos</h1>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid"> 
                <nav class="navbar navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" >
                            <router-link :to="{name:'InicioPanelAdmin'}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-house" viewBox="0 0 16 16" >
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg> </router-link>      
                        </a>
                    </div>
                </nav>
               
                <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        
                    </template>
                </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav> 
            <b-navbar-nav class="ml-auto">
                 <b-nav-item>
                    <router-link :to="{name:'crearvendedorj'}" class="btn btn-outline-light" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg></router-link>
                </b-nav-item>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <b-nav-item><li class="nav-item">      
                        <button type="button" class="btn btn-success" @click.prevent="actualizarpagina()">Volver</button>
                    </li></b-nav-item>
                </ul>
                
                <b-nav-item><div class="d-flex" >
                    <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="consultar por id" 
                    aria-label="search" 
                    v-model="buscarusuario"
                    >
                    <button class="btn btn-outline-light" @click.prevent="consultarVendedorN()">Consultar</button>
                    
                </div></b-nav-item>
               
                </b-navbar-nav>
            </b-collapse>  
                 
        </div>
    </nav>
    <div>
    <table class="table table-bordered"> 
        <thead>
            <tr>
            <th scope="col">nombre</th>
            <th scope="col">Nit</th>
            <th scope="col">correo</th>
            <th scope="col">telefono</th>
            <th scope="col">direccion</th>
            <th scope="col">ciudad</th>
            <th scope="col">Tipo plastico</th>
            <th scope="col">cantidad plastico</th>
            <th scope="col">estado plastico</th>
            
            </tr>
        </thead>
        <tbody>
            <tr id ="tabla" v-for="usuario in usuarios" :key="usuario.id">
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.Nit}}</td>
                <td>{{usuario.correo}}</td>
                <td>{{usuario.telefono}}</td>
                <td>{{usuario.direccion}}</td>
                <td>{{usuario.ciudad}}</td>
                <td>{{usuario.Tipo_plastic}}</td>
                <td>{{usuario.cantidad_plastic}}</td>
                <td>{{usuario.estado_plastic}}</td>
                
                <td>
                    <button @click.prevent="deleteusuario(usuario._id)" class="btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                     </button>
                    <router-link :to="{name: 'editarvendedorj', 
                    params: {id: usuario._id}}" class="btn btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
               
               
                usuarios: [
                   
                ],
                buscarusuario:'',
            }
        },
            created(){
                axios.get("https://backend54-7.herokuapp.com/vendedorJuridicoConsulta").then((res)=>this.usuarios=res.data);
            },
            methods:{
                deleteusuario(id){
                let indexofArrayItem=this.usuarios.findIndex((i)=>i._id === id);
                axios.delete("https://backend54-7.herokuapp.com/borrarvendedorJ/"+id).then(()=>console.log("El registro se ha eliminado"));
                this.usuarios.splice(indexofArrayItem,1);
                alert("El registro se ha eliminado");
            },
            consultarVendedorN(){
                const API="https://backend54-7.herokuapp.com/buscavendedornombrejuridico/"+this.buscarusuario;
                console.log(API);
                console.log(this.buscarusuario);
                axios.get(API).then((res)=>{
                    console.log(res.data);
                    if(res.data.length==0){
                        alert(`${this.buscarusuario} no se pudo encontrar en la base de datos`);
                        
                }else{
                    if(res.data.length>0){
                            this.usuarios=res.data

                    }else{
                        this.usuarios=[res.data]
                    }
                }});
            
            },
            actualizarpagina(){
                window.location.reload(true);
            } 
        }
    }
</script>