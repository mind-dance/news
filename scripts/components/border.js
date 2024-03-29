app.component("my-border", {
    props: {
      class: string
    },
    date() {
      return {
        type: 'base'
      }
    },
    template:
      /*html*/
      `
      <div
      class="radius"
      :style="getStyle"
      ></div>
      `
  })

