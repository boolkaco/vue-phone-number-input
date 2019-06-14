import countriesLangEN from '../json/en.json'
import countriesLangDE from '../json/de.json'

export default {
  data () {
    return {
      countries: {
        en: countriesLangEN,
        de: countriesLangDE,
      },
    }
  },
  methods: {
    getCountries (lang) {
      return this.countries[lang]
    },
    getTranslateCountries (lang) {
      const countries = this.getCountries(lang)
      return countries.map(country => ({
        name: country[0],
        iso2: country[1].toUpperCase(),
        dialCode: country[2],
        priority: country[3] || 0,
        areaCodes: country[4] || null
      }))
    },
  },
}
