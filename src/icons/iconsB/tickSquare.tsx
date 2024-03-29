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
        d="M15.753 2C19.59 2 22 4.392 22 8.253v2.569a.757.757 0 01-.756.756h-.009v-.018a.765.765 0 01-.765-.763V8.253c0-3.053-1.67-4.723-4.714-4.723h-7.5C5.21 3.53 3.53 5.21 3.53 8.253v7.5c0 3.034 1.68 4.714 4.723 4.714h7.5c3.043 0 4.714-1.68 4.714-4.714a.765.765 0 111.53 0C22 19.608 19.608 22 15.757 22H8.252C4.393 22 2 19.608 2 15.756v-7.5C2 4.392 4.392 2 8.253 2zm-.723 7.096a.75.75 0 111.06 1.061l-4.746 4.747a.754.754 0 01-1.061 0L7.91 12.53a.75.75 0 111.06-1.06l1.844 1.843z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent