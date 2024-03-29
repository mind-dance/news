app.component("header-display", {
  props: {},
  template:
    /*html*/
    `
    <div>
      <el-page-header @back="goBack">
        <template #content>
          <span class="text-large font-600 mr-3"> 地精 </span>
        </template>
      </el-page-header>
    </div>
    `
})
