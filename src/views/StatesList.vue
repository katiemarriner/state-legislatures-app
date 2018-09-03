<template lang="pug">
  v-container
    v-layout(row)
      v-flex(xs6)
        v-list(two-line)
          template(
            v-for="state in states"
            v-if="statefaceKey[state.abbreviation]"
          )
            v-list-tile(
              :key="state.abbrevation"
              @click="navigate(state.abbreviation)"
            )
              v-list-tile-content(:key="`row-${state.abbreviation}`")
                v-list-tile-title {{ state.name }}
              v-list-tile-avatar
                span.stateface.stateface--large(v-html="statefaceKey[state.abbreviation]")
            v-divider
</template>

<script>
import states from './../assets/states_titlecase.json'
import statefaceKey from './../assets/stateface.json'

export default {
  name: 'StatesList',
  data() {
    return {
      states,
      statefaceKey,
    }
  },
  mounted() {
    console.log(this.statefaceKey)
  },
  computed: {
    statefaceCode(s) {
      console.log(s);
    },
  },
  methods: {
    navigate(abbr) {
      this.$router.push({
        name: 'detail',
        params: {
          id: abbr
        }
      })
    }
  }
}
</script>

