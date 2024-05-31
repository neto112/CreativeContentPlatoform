import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import { pt } from 'vuetify/locale'
import 'vuetify/styles'

const Lighttheme: ThemeDefinition = {
  colors: {
    primary: '#6f18a8',
    secondary: '#008bbd',
    accent: '#FF6304',
    redmain: '#F70052',
    redsecondary: '#FF4A86',
    red900: '#B81148',
    red500: '#FF7BA7',
    red400: '#FFA7C4',
    orangemain: '#FF6100',
    orangesecondary: '#FF8133',
    orange600: '#FF8D55',
    orange500: '#FF8D55',
    purplemain: '#6400AC',
    purplemain2: '#621F9A',
    purplesecondary: '#7F51C7',
    purple500: '#A77DE8',
    purple300: '#D2B6FF',
    blue900: '#12032B',
    blue850: '#1A0A33',
    blue800: '#271A5D',
    bluemain: '#3E009F',
    bluesecondary: '#4A2DA3',
    blue300: '#645FC9',
    blue100: '#8883F7',
    blue50: '#C4C1FF',
    gray700: '#313943',
    gray500: '#5E6D7E',
    gray300: '#A2AFBD',
    gray200: '#BEC5D7',
    gray100: '#CFD9E3',
    gray50: '#E6EDF4',
    gray25: '#F2F7FF',
    white: '#FAFCFF',
    green900: '#257A4C',
    green700: '#00B854',
    green300: '#C2F2D8'
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
    locale: 'pt',
    fallback: 'pt',
    messages: { pt }
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
    }
  }
})
