import ReactECharts from 'echarts-for-react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { getChangeColor } from '@/utils'
import { Economy } from '../constant'
import { useIndicate } from '../hooks'
import useWindowSize from '@/hooks/useWindowSize'
import { useTranslation } from 'react-i18next'

const IndicateCharts = () => {
  const { t } = useTranslation()

  const { windowSize, Size } = useWindowSize()

  const isSmall = windowSize === Size.Small
  const width = isSmall ? '164px' : '204px'

  const { activeIndicate, handleChange, indicateData, indicateOptions, unit } = useIndicate()

  const options = {
    grid: { top: 8, bottom: 6, left: 24, right: 24, },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: indicateData.date.slice(-24),
      axisLabel: {
        margin: 12,
        interval: activeIndicate === Economy.inflation ? 6 : 23,
        formatter: (value) => value.replaceAll('-', '/'),
      }
    },
    yAxis: {
      show: false,
      type: 'value',
      scale: true,
      axisLabel: { formatter: `{value} ${unit}` },
      name: unit,
    },
    series: [
      {
        type: 'line',
        data: indicateData.value.slice(-24),
        lineStyle: { width: 3, color: '#306F7D' },
        symbolSize: 0,
        itemStyle: { color: '#306F7D' },
        emphasis: { areaStyle: { color: '#fff6d8' } },
        smooth: true,
      }
    ],
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        const prevIndex = params[0].dataIndex - 1
        const prevValue = indicateData.value[prevIndex] || 0

        const change = params[0].value - prevValue
        const isUp = change >= 0

        let tooltipHtml = '<div>'
        tooltipHtml += `<div style="font-weight:bold;">${params[0].name}</div>`
        tooltipHtml += `
          <h3 style="margin-top:4px;font-size:14px;text-align:right;color:#b28905;display:flex;align-items:center;">
            <span style="display:inline-block;background:#306F7D;border-radius:50%;width:10px;height:10px;"></span>&nbsp; &nbsp;
            <span style="color:${getChangeColor(change)};display:${prevIndex === -1 ? 'none' : 'inline'};">
              ${Number(params[0].value).toFixed(3)}${unit}
              (${isUp ? '+' : ''}${Number(change).toFixed(2)}${unit})
            </span>
          </h3>
        `
        tooltipHtml += '</div>'
        return tooltipHtml
      }
    },
  }

  return (
    <div className="px-4 py-2 hidden md:block w-1/3 bg-white rounded-xl shadow">
      <div className="mb-2 flex justify-between items-center gap-4">
        <div className="mb-3 font-bold text-lg text-secondary truncate">
          {t(activeIndicate)}
        </div>

        <TextField
          label={t('indicate')}
          style={{ width: width, maxWidth: '40%' }}
          value={activeIndicate}
          onChange={handleChange}
          select
          color="secondary"
          size="small"
        >
          {indicateOptions.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <ReactECharts style={{ height: '160px' }} option={options} />
    </div>
  )
}

export default IndicateCharts
