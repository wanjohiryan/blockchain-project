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
        d="M21.235 12.677a.765.765 0 00.765-.765v-1.02c0-4.046-1.802-6.016-5.495-6.016H13.78a1.424 1.424 0 01-1.134-.554l-.879-1.17A2.989 2.989 0 009.402 2H7.486C3.846 2 2 4.102 2 8.253v7.502C2 19.608 4.391 22 8.25 22h7.49c3.851 0 6.251-2.392 6.251-6.245a.774.774 0 00-1.538 0c0 3.035-1.67 4.715-4.712 4.715h-7.5c-3.041 0-4.711-1.671-4.711-4.715v-.73h12.307a.765.765 0 000-1.53H3.53V8.218c0-3.307 1.178-4.723 3.947-4.723H9.41c.444.007.86.214 1.134.563l.88 1.161a2.962 2.962 0 002.355 1.179h2.717c2.857 0 3.965 1.275 3.965 4.494v1.02a.765.765 0 00.773.765z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent