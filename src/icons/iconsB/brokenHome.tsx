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
        d="M4.5 7.03a.783.783 0 01.8 1.283l-.704.522a1.47 1.47 0 00-.53 1.122v7.956a2.365 2.365 0 002.356 2.348h4v.017a.783.783 0 110 1.565h-4A3.93 3.93 0 012.5 17.922V9.957a3.026 3.026 0 011.174-2.348l.722-.54zM9.621 2.8a3.609 3.609 0 014.521 0l6.01 4.791A3.052 3.052 0 0121.29 9.94l-.008 7.974a3.922 3.922 0 01-3.922 3.922h-1.74c-1.048 0-1.899-.848-1.904-1.896v-3.6l-.008-.09a.505.505 0 00-.496-.414h-2.609a.504.504 0 00-.504.513v1.374a.783.783 0 11-1.565 0v-1.374a2.078 2.078 0 012.078-2.078h2.609a2.078 2.078 0 012.07 2.078v3.591c0 .183.147.33.33.33h1.782a2.348 2.348 0 002.348-2.347V9.957a1.47 1.47 0 00-.556-1.13l-6.009-4.792a2.052 2.052 0 00-2.609 0l-1.93 1.443a.798.798 0 11-.93-1.295z"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent