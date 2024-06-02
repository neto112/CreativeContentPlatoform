import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import { en } from 'vuetify/locale'
import 'vuetify/styles'

const Lighttheme: ThemeDefinition = {
  colors: {
    primary: '#3399CC',
    secondary: '#D1D5DB',
    accent: '#EAF3FA',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  },
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en }
  },
  theme: {
    themes: {
      light: Lighttheme,
      dark: {},
      variables: {}
    }
  },
  defaults: {
    VTextField: {
      variant: 'outlined',
      bgColor: 'background'
    },
    VBtn: {
      color: 'primary',
      rounded: 'md',
      flat: true,
      fontWeight: '500',
      height: '48px',
      class: 'btn-text-transform text-subtitle-1'
    },
    VAlert: {
      color: 'primary',
      variant: 'tonal'
    }
  }
})
