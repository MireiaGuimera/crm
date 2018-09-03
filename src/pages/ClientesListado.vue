<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h3>Listado de clientes</h3>
            </v-card-title>
            <v-card-text class="px-0">
              <h4>Nombre fiscal</h4>
              <h1>{{ cliente.nombre }}</h1>
              <h4>Razon social</h4>
              <h1>asdf</h1>
              <h4>Club Lubrimed</h4>
              <h1>asdf</h1>
              <p>Dirección</p>
              <p>{{ cliente.DatosEmpresa.Poligono }}</p>
              <p>{{ cliente.DatosEmpresa.Calle }}</p>
              <p>{{ cliente.DatosEmpresa.Cp }} {{ cliente.DatosEmpresa.Ciudad }} {{ cliente.DatosEmpresa.Provincia }}</p>
              <hr>
              <h4>Contacto</h4>
              <h4>Oficinas {{ cliente.DatosEmpresa.Telefono }}</h4>
              <h4>Atención al cliente {{ cliente.DatosEmpresa.TelefomoAtencionCliente }}</h4>
              <h4>Email {{ cliente.DatosEmpresa.Email }}</h4>
              <hr>
              <h4>Contacto</h4>
              <h3>{{ cliente.DatosEmpresa.Contacto }}</h3>
              <h4>Cargo</h4>
              <h3>{{ cliente.DatosEmpresa.ContactoCargo }}</h3>
              <hr>
              <h3>Contacto</h3>
              <h3>Teléfono {{ cliente.DatosEmpresa.ContactoTelefono }}</h3>
              <h3>Email {{ cliente.DatosEmpresa.ContactoEmail }}</h3>
              <hr>
              <h1>asdf</h1>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import router from 'vue-router'

export default {
  data () {
    return {
      id: this.$route.params.id,
      cliente: []
    }
  },
  created () {
    let id = this.$route.params.id
    axios.get('http://localhost:3000/clientes/' + id)
      .then(res => { this.cliente = res.data })
      .catch(error => { console.log(error) })
      .then(function () {

      })
  },
  methods: {
    navigate () {
      router.go(-1)
    }
  }
}
</script>

<style lang="css">
</style>
