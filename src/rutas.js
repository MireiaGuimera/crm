import Clientes from './components/ClientesTabla.vue'
import Contacto from './components/Contacto.vue'
import ClientesDetalle from './pages/ClientesListado.vue'
import Aceites from './components/AceitesTabla.vue'

export const rutas = [
  { path: '/clientes', component: Clientes },
  { path: '/clientes/:id', name: 'ClientesDetalles', component: ClientesDetalle },
  { path: '/aceites', component: Aceites },
  { path: '/contacto', component: Contacto }
]
