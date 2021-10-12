<template>
<div>
  <Serviciosplasticos/>
    <div>
    <Noticias/>
    </div>
  <Equipo/>
</div>
</template>

<script>
// @ is an alias to /src
import Serviciosplasticos from '@/components/Serviciosplasticos.vue'
import Noticias from '@/components/Noticias.vue'
import Equipo from '@/components/Equipo.vue'

export default {
  name: 'Home',
  components: {
    Serviciosplasticos,
    Noticias,
    Equipo
  }
}
</script>