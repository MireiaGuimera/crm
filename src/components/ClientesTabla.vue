<template>
  <div>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          Clientes
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="clientes"
          :search="search"
        >
          <template slot="items" slot-scope="props">
            <router-link :to="{ name: 'ClientesDetalles', params: { id: props.item.id } }" tag="tr">
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.nombre }}</td>
              <td class="text-xs-right">{{ props.item.estado }}</td>
              <td class="text-xs-right">{{ props.item.pagos }}</td>
            </router-link>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Estado', value: 'estado' },
        { text: 'Pagos', value: 'pagos' }
      ],
      clientes: []
    }
  },
  created () {
    axios.get('http://localhost:3000/clientes')
      .then(res => { this.clientes = res.data })
      .catch(error => { console.log(error) })
      .then(function () {

      })
  }
}
</script>

<style lang="css">

</style>
