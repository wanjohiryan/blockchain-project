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
        d="M12 2c5.514 0 10 4.485 10 10 0 5.514-4.486 10-10 10a9.94 9.94 0 01-7.927-3.902.727.727 0 111.152-.888A8.493 8.493 0 0012 20.546c4.712 0 8.546-3.833 8.546-8.546 0-4.712-3.834-8.546-8.546-8.546S3.454 7.288 3.454 12c0 .438.033.873.098 1.299a.728.728 0 01-1.437.22A10.1 10.1 0 012 11.999C2 6.486 6.486 2 12 2zm.01 13.046a.75.75 0 010 1.5.755.755 0 01-.755-.75c0-.414.331-.75.745-.75zM12 7.454a.75.75 0 01.75.75v4.42a.75.75 0 01-1.5 0v-4.42a.75.75 0 01.75-.75z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent