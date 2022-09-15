import * as echarts from 'echarts'

import ChinaMapData from '../data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  //手动调整宽度
  const updateSize = () => {
    echartInstance.resize()
  }

  //根据容器宽度调整宽度
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
