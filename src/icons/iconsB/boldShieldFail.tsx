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
        d="M11.34 2.104a1.87 1.87 0 011.229 0L19.2 4.329a1.8 1.8 0 011.248 1.697l.05 6.638a8.245 8.245 0 01-2.073 5.492c-.614.706-1.409 1.304-2.415 1.844l-3.573 1.912a.75.75 0 01-.352.088.79.79 0 01-.363-.088L8.12 20.049c-1.016-.53-1.812-1.118-2.436-1.814a8.224 8.224 0 01-2.143-5.472l-.04-6.64c-.01-.765.492-1.45 1.227-1.706zm-.704 7.255a.774.774 0 00-1.067 0 .728.728 0 000 1.04l1.36 1.323-1.36 1.325a.726.726 0 000 1.04.756.756 0 00.534.214.723.723 0 00.533-.214l1.359-1.324 1.359 1.324a.756.756 0 00.533.214.74.74 0 00.534-.214.726.726 0 000-1.04l-1.36-1.325 1.36-1.322a.728.728 0 000-1.04.774.774 0 00-1.067 0l-1.359 1.324z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent