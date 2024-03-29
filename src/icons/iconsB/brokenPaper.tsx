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
        d="M14.44 2c.02 0 .037.01.057.012h.206c.203 0 .398.084.54.233l5.049 5.312a.76.76 0 01.208.523v9.228c0 2.543-2.045 4.692-4.465 4.692H8.07c-2.562 0-4.57-2.06-4.57-4.692v-2.523c0-.417.335-.755.748-.755.412 0 .747.338.747.755v2.523c0 1.784 1.351 3.182 3.075 3.182h7.965c1.582 0 2.97-1.487 2.97-3.182V8.383L15.188 4.37v1.316a1.83 1.83 0 001.815 1.837c.412.001.746.34.745.757a.751.751 0 01-.747.753c-1.825-.004-3.308-1.505-3.308-3.347V3.522H8.07c-1.667 0-3.075 1.374-3.075 3v4.159a.752.752 0 01-.747.755.752.752 0 01-.748-.755V6.52c0-2.444 2.093-4.509 4.57-4.509h6.313c.02-.002.037-.012.058-.012zm-.188 12.895c.412 0 .747.338.747.755a.752.752 0 01-.747.755H8.87a.752.752 0 01-.748-.755c0-.417.335-.755.748-.755zM12.216 9.91c.413 0 .748.339.748.755a.752.752 0 01-.748.755H8.87a.752.752 0 01-.748-.755c0-.416.335-.755.748-.755z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent