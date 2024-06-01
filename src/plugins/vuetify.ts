import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import { en } from 'vuetify/locale'
import 'vuetify/styles'

const Lighttheme: ThemeDefinition = {
  colors: {
    gray100: '#E9E2CC',
    white: '#F2ECD8',
    black: '#291C1D',
    blue300: '#23AAE1'
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
      variant: 'outlined'
    },
    VBtn: {
      color: 'black',
      rounded: 'md',
      flat: true,
      fontWeight: '500',
      height: '48px',
      variant: 'tonal',
      class: 'btn-text-transform text-subtitle-1'
    }
  }
})
