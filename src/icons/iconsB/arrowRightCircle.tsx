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
        d="M2 12C2 6.486 6.488 2 12 2c5.514 0 10 4.486 10 10s-4.485 10-10 10a9.939 9.939 0 01-7.926-3.902.728.728 0 011.153-.888A8.486 8.486 0 0012 20.546c4.712 0 8.546-3.833 8.546-8.546 0-4.712-3.834-8.545-8.546-8.545S3.455 7.288 3.455 12c0 .437.033.874.098 1.299a.728.728 0 01-1.438.22A10.1 10.1 0 012 12zm8.027 4a.749.749 0 01.002-1.06L12.982 12l-2.953-2.94a.75.75 0 111.059-1.062l3.486 3.472a.744.744 0 010 1.062l-3.486 3.47a.75.75 0 01-1.061-.001z"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent