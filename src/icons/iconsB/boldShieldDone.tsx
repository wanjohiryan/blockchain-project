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
        d="M12.57 2.1l6.638 2.227a1.81 1.81 0 011.25 1.695l.042 6.64a8.245 8.245 0 01-2.065 5.496c-.618.702-1.41 1.305-2.422 1.844l-3.568 1.908a.782.782 0 01-.717.004L8.127 20.05c-1.023-.531-1.822-1.125-2.446-1.818a8.248 8.248 0 01-2.139-5.473L3.5 6.124a1.812 1.812 0 011.228-1.711l6.613-2.307c.392-.139.83-.142 1.23-.006zm3.175 7.119a.77.77 0 00-1.068.006l-3.369 3.32-1.38-1.326a.77.77 0 00-1.067.007.721.721 0 00.007 1.04l1.916 1.843a.76.76 0 00.535.212.76.76 0 00.533-.219l3.899-3.844a.722.722 0 00-.006-1.04z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent