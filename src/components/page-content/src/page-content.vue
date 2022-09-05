<template>
  <div class="page-content">
    <hy-table :listData="dataList" v-bind="contentTableConfig">
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 列中插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{
          globalProperties.$filters.formatTime(scope.row.createAt)
        }}</span>
      </template>
      <template #updateAt="scope">
        <strong>{{
          globalProperties.$filters.formatTime(scope.row.updateAt)
        }}</strong>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button size="small" type="primary" text
            ><el-icon><EditPen /></el-icon>编辑</el-button
          >
          <el-button size="small" type="primary" text
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    const {
      appContext: {
        config: { globalProperties }
      }
    } = getCurrentInstance() as ComponentInternalInstance
    return {
      globalProperties,
      dataList
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
