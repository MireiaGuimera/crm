<template>
  <div class="card">
    <v-container grid-list-md >
      <v-layout text-xs-left>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h3>Información del cliente</h3>
            </v-card-title>
            <v-card-text class="px-10">
              <h4>Nombre fiscal</h4>
              <h1>{{ cliente.DatosEmpresa.NombreFiscal }}</h1>
              <h4>Dirección</h4>
              <p>{{ cliente.DatosEmpresa.Poligono }}</p>
              <p>{{ cliente.DatosEmpresa.Calle }}</p>
              <p>{{ cliente.DatosEmpresa.Cp }} {{ cliente.DatosEmpresa.Ciudad }} {{ cliente.DatosEmpresa.Provincia }}</p>
              <hr>
              <h4>Contacto</h4>
              <p>Oficinas: {{ cliente.DatosEmpresa.Telefono }}</p>
              <p>Atención al cliente: {{ cliente.DatosEmpresa.TelefomoAtencionCliente }}</p>
              <p>Email: {{ cliente.DatosEmpresa.Email }}</p>
              <hr>
              <h4>Contacto</h4>
              <p>{{ cliente.DatosEmpresa.Contacto }}</p>
              <p>Cargo: {{ cliente.DatosEmpresa.ContactoCargo }}</p>
              <p>Teléfono: {{ cliente.DatosEmpresa.ContactoTelefono }}</p>
              <p>Email: {{ cliente.DatosEmpresa.ContactoEmail }}</p>
              <hr>
              <v-btn color="success">Solicitar pedido</v-btn>
              <v-btn color="error">Anular pedido</v-btn>
              <v-btn color="warning">Solicitar cambio</v-btn>
              <v-btn color="info">Solicitar Información</v-btn>
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
.card { width: 50% }
</style>
