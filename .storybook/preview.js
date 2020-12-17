import { initializeIcons } from '@uifabric/icons';
import '@fluentui/react/dist/css/fabric.min.css'
import '../src/bootstrap/scss/bootstrap.scss'

initializeIcons();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}
