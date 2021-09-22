import * as React from "react"
import Svg, { SvgProps, Path, Circle, Ellipse, G } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      //xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 6.35 6.35"
      {...props}
    >
      <Path d="M1.205.425a1.69 1.69 0 00-.592.523c-.228.338-.228.363-.254 2.025C.325 4.888.385 5.19.892 5.639c.423.362.77.43 2.37.43s1.946-.068 2.37-.43c.507-.448.566-.751.533-2.666C6.139 1.31 6.139 1.286 5.91.948c-.415-.624-.703-.7-2.658-.7-1.548 0-1.709.017-2.048.177zm3.86.43c.118.06.312.237.414.397.186.27.195.363.195 1.856 0 2.42-.034 2.455-2.412 2.455S.842 5.52.842 3.183c0-.851.033-1.644.076-1.754.16-.396.482-.607 1.05-.683.752-.093 2.826-.017 3.096.11z" />
      <Path d="M1.78 3.082c0 .321.06.574.179.785.457.818 1.557 1.012 2.25.405.381-.329.534-.692.534-1.24V2.61H1.78zm2.455.245c0 .118-.11.33-.245.481-.229.253-.297.278-.728.278-.432 0-.5-.025-.728-.278-.135-.152-.245-.363-.245-.48v-.212h1.946z" />
      <Circle
        cx={1.951}
        cy={1.617}
        r={0.331}
        fillOpacity={0.992}
        //paintOrder="markers stroke fill"
      />
      <Circle
        cx={4.657}
        cy={1.584}
        r={0.331}
        fillOpacity={0.992}
        //paintOrder="markers stroke fill"
      />
      <Ellipse
        cx={5.679}
        cy={5.028}
        rx={0.835}
        ry={0.919}
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.64}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.92}
      />
      <G>
        <Path d="M5.694 3.564a.278.278 0 00-.134.107c-.017.033-.02.089-.026.498l-.006.46-.455.006-.456.006-.054.032a.238.238 0 00-.106.27.268.268 0 00.16.163c.03.008.2.013.483.013h.434v.452c0 .452 0 .453.028.505.086.162.332.162.419 0 .027-.052.027-.053.027-.505v-.452h.436c.282 0 .451-.005.482-.013a.268.268 0 00.16-.164.243.243 0 00-.11-.271l-.05-.03-.456-.006-.456-.006-.006-.46c-.007-.51-.006-.505-.085-.564a.244.244 0 00-.229-.041z" />
      </G>
    </Svg>
  )
}

export default SvgComponent