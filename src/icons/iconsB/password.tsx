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
        d="M16.334 2C19.724 2 22 4.378 22 7.916v8.168C22 19.622 19.722 22 16.333 22h-5.38a.75.75 0 010-1.5h5.38c2.531 0 4.167-1.733 4.167-4.416V7.916c0-2.683-1.636-4.416-4.166-4.416H7.665C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416a.75.75 0 010 1.5C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2zM8.84 9.398c1.173 0 2.154.784 2.478 1.851h5.692a.75.75 0 01.75.75v1.852a.75.75 0 01-1.5 0V12.75h-1.329v1.102a.75.75 0 01-1.5 0V12.75h-2.113a2.595 2.595 0 01-2.478 1.852 2.604 2.604 0 01-2.373-3.669.748.748 0 01.992-.376.748.748 0 01.376.991A1.103 1.103 0 109.942 12c0-.607-.494-1.1-1.102-1.1a.75.75 0 010-1.5z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default SvgComponent