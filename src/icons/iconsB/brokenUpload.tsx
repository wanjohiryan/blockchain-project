import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M17.286 8.602c2.323 0 4.214 1.938 4.214 4.321v4.747c0 2.387-1.895 4.33-4.225 4.33a.74.74 0 01-.73-.75.74.74 0 01.73-.75c1.524 0 2.762-1.27 2.762-2.83v-4.747c0-1.556-1.234-2.821-2.751-2.821h-.894a.741.741 0 01-.732-.75c0-.414.328-.75.732-.75zm-9.677 0c.403 0 .73.336.73.75 0 .413-.327.75-.73.75h-.884c-1.524 0-2.762 1.27-2.762 2.83v4.746c0 1.557 1.235 2.822 2.751 2.822h7.235c.404 0 .731.336.731.75s-.327.75-.731.75H6.714C4.391 22 2.5 20.062 2.5 17.678v-4.745C2.5 10.544 4.395 8.6 6.725 8.6zm4.112-6.545a.72.72 0 01.798.163l2.764 2.846a.763.763 0 01-.002 1.06.718.718 0 01-1.035-.001l-1.514-1.56v9.886c0 .414-.328.75-.732.75a.743.743 0 01-.732-.75V2.75a.75.75 0 01.453-.694zM9.409 4.35a.718.718 0 011.034-.006.76.76 0 01.006 1.061l-.693.718a.718.718 0 01-1.033.005.761.761 0 01-.006-1.06z"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent