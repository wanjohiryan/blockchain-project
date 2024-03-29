import * as React from "react"
import Svg, { Path } from "react-native-svg"


interface IconProps{
  color?:string;
}

function Browser ({color}:IconProps) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path
        d="M16.05 2.625h-8.4c-2.934 0-5.335 2.33-5.335 5.177v8.153c0 2.847 2.4 5.176 5.335 5.176h8.4c2.935 0 5.335-2.33 5.335-5.176V7.802c0-2.847-2.4-5.177-5.334-5.177m0 1.553c2.059 0 3.734 1.626 3.734 3.624v8.153c0 1.998-1.675 3.623-3.734 3.623H7.65c-2.06 0-3.734-1.625-3.734-3.623V7.802c0-1.998 1.674-3.624 3.734-3.624h8.4"
        fill={color}//"#0e0000"
        stroke="none"
      />
      <Path
        d="M20.913 10.037h-9.246a1.85 1.85 0 01-1.361-.61l-.062-.068a.266.266 0 00-.19-.08L7.978 9.27h-.001a.272.272 0 00-.2.092c-.4.444-.904.675-1.42.675h-3.48V8.194h3.48a.274.274 0 00.2-.091c.402-.445.905-.676 1.42-.676h.006l2.077.008c.5.002.975.211 1.335.59l.077.082a.265.265 0 00.195.087h9.246z"
        fill={color} //"#020000"
        stroke="none"
      />
      <Path
        d="M16.8 13.454H6.462c-.503 0-.912-.367-.912-.819 0-.452.409-.818.912-.818h10.34c.503 0 .912.366.912.818 0 .452-.409.819-.912.819M16.76 16.734H6.42c-.504 0-.913-.367-.913-.818 0-.452.41-.819.913-.819h10.34c.503 0 .911.367.911.819 0 .451-.408.818-.912.818"
        fill={color} //"#000"
        stroke="none"
      />
    </Svg>
  )
}

export default Browser