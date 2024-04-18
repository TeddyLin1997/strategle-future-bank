import DownIcon from '@/assets/images/down.png'
import UpIcon from '@/assets/images/up.png'
import { getChangeColor } from '@/utils'
import Big from 'big.js'
import { useEconomyOverview } from '../hooks'

export default function Indicate () {
  const { indicies } = useEconomyOverview()

  return (
    <div className="mb-20 md:mb-16 bg-secondary">
      <div className="mx-auto py-10 max-w-screen-xl">
        <header className="mb-4 px-2 text-5xl font-black text-white">Economic Overview</header>
        <p className="mb-6 px-2 text-2xl font-semibold text-white">Keep abreast of economic trends and market news information.</p>


        <div className="relative w-full h-44 md:h-8">
          <section className="absolute top-0 w-full flex items-center flex-wrap md:flex-nowrap">
            { indicies.map(item => {
              const curr = new Big(item.value || 0)
              const prev = new Big(item.prevValue || 0)
              const change = curr.minus(prev)
              const changeNumber = change.toNumber()
              const isUp = changeNumber >= 0

              return (
                <div key={item.key} className="px-2 w-1/2 md:w-1/4">
                  <div className="mb-6 p-3 bg-white rounded-lg shadow">
                    <div className="mb-4 flex items-center gap-3 font-bold text-lg">
                      <div className="w-12 h-12 rounded-md">
                        <img src={item.icon} className="w-full h-full"/>
                      </div>

                      <div className="w-[calc(100%-48px)] flex flex-col justify-between text-right">
                        <div className="w-full text-[#214d57] truncate">{item.name}</div>
                        <div className="w-full text-sm text-[#81858c] truncate">{item.time || 'YYYY-MM-DD'}</div>
                      </div>
                    </div>

                    <div className="flex items-end gap-3">
                      <div className="font-bold whitespace-nowrap text-xl">{item.formatValue}</div>
                      <div className={`mb-1 px-2 font-bold whitespace-nowrap text-sm rounded-md ${ isUp ? 'text-up bg-up-extend' : 'text-down bg-down-extend' }`} style={{ color: getChangeColor(changeNumber) }}>
                        {`${isUp ? '+' : '-'}${change.toFixed(2)}${item.unit}`}
                      </div>

                      <img className="ml-auto w-8 h-8" src={isUp ? UpIcon : DownIcon } />
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        </div>

      </div>
    </div>
  )
}
