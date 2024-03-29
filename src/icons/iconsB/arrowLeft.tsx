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
        d="M22 12c0 5.514-4.486 10-10 10S2 17.514 2 12 6.487 2 12 2a9.939 9.939 0 017.927 3.902.728.728 0 01-1.153.888A8.486 8.486 0 0012 3.454c-4.712 0-8.546 3.833-8.546 8.546 0 4.712 3.834 8.545 8.546 8.545s8.546-3.833 8.546-8.545a8.62 8.62 0 00-.098-1.299.728.728 0 011.438-.22A10.1 10.1 0 0122 12zm-8.026-4a.749.749 0 01-.002 1.06L11.02 12l2.953 2.94a.75.75 0 11-1.059 1.062L9.427 12.53a.744.744 0 010-1.062l3.486-3.47a.75.75 0 011.061.001z"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent