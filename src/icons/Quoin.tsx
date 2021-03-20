import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

interface IconProps{
    color?:string;
}

function Quoin ({color}:IconProps) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 56 56"
      fill={color}
	    stroke={color}
    >
      <G strokeWidth={1.3}>
        <Path d="M21.6 14.505c-.724.124-1.16.37-1.957 1.09-1.21 1.11-2.038 2.278-2.591 3.686-.71 1.804-.872 4.172-.421 6.08.886 3.698 4.26 6.073 8.956 6.313l.797.039v2.946c0 3.27-.015 3.153.487 3.445.754.435 2.481.454 3.293.033.126-.065.296-.201.384-.299.155-.181.155-.253.178-3.153l.022-2.972.753-.045c4.378-.24 7.804-2.765 8.646-6.353.413-1.739.266-4.003-.37-5.768a7.656 7.656 0 00-5.123-4.789c-1.278-.363-3.257-.421-4.578-.13-1.455.312-2.57 1.039-3.116 2.018-.554.993-.532.669-.554 6.411l-.03 5.152-.583-.045c-2.473-.182-4.23-1.467-4.887-3.575-.133-.442-.155-.688-.155-1.688 0-1.057.014-1.226.192-1.816.376-1.24 1.277-2.609 2.864-4.354.362-.402.71-.811.768-.909.34-.577-.133-1.135-1.13-1.317-.45-.084-1.38-.084-1.845 0zm2.074.662c.51.195.495.22-.686 1.538-1.632 1.823-2.407 3.114-2.813 4.704-.067.247-.104.798-.096 1.525 0 1.22.11 1.81.494 2.647.687 1.486 2.149 2.576 4.002 3.005.775.175 2.252.246 2.378.11.066-.072.096-1.402.118-5.412.022-4.71.037-5.353.14-5.664.465-1.324 1.47-2.109 3.123-2.446.894-.182 2.725-.17 3.61.026 2.43.532 4.305 2.147 5.176 4.457.613 1.596.76 4.146.333 5.717-.377 1.388-1.004 2.394-2.134 3.42-1.351 1.219-3.013 1.94-5.124 2.212a12.05 12.05 0 01-1.322.104c-.908 0-.827-.318-.871 3.322l-.037 3.134-.295.13c-.443.194-1.78.188-2.267-.013l-.354-.143v-3.108c0-2.881-.008-3.115-.126-3.206-.096-.071-.399-.11-1.13-.142-4.068-.163-7.014-1.915-8.188-4.854-.457-1.155-.627-2.491-.517-3.997.119-1.538.45-2.654 1.174-3.938a9.23 9.23 0 011.95-2.382c.605-.545.841-.681 1.41-.81.487-.111 1.683-.072 2.052.064z" />
        <Path d="M31.648 17.094c-.45.085-.708.22-1.033.545-.59.59-.569.364-.598 5.879-.015 3.393 0 4.957.059 5.087l.074.182.982-.033c1.1-.032 1.617-.136 2.377-.473 1.957-.876 3.079-2.596 3.19-4.893.074-1.577-.207-2.959-.842-4.088-.62-1.096-1.713-1.914-2.865-2.134-.583-.11-1.011-.13-1.344-.072zm1.27.662c1.123.247 2.105 1.136 2.622 2.375.583 1.414.671 3.53.206 4.88-.65 1.868-2.517 3.179-4.54 3.179h-.466v-9.577l.185-.331c.347-.61.923-.76 1.993-.526zM28.474 31.155c-.074.026-.096.37-.096 1.447 0 1.427.03 1.596.258 1.427.089-.064.11-.324.11-1.427 0-1.363-.029-1.525-.272-1.447zM28.378 35.223c0 .565.066.701.265.552.082-.059.104-.195.09-.571-.023-.454-.038-.493-.186-.513-.162-.02-.17-.006-.17.532zM28.43 36.151c-.03.02-.052.156-.052.292 0 .227.014.253.17.234.118-.013.17-.072.184-.201.037-.247-.162-.455-.303-.325z" />
      </G>
    </Svg>
  )
}

export default Quoin 