import * as React from "react"
import Svg, { Path } from "react-native-svg"
interface IconProps{
    color?:string;
}

function Home ({color}:IconProps)  {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 56 56"
    >
      <Path
        d="M33.192 38.512h.803c2.807 0 4.844-1.704 4.844-4.052v-8.007c-.186-.671-3.358-3.825-8.336-7.844-.886-.716-2.211-.706-3.083.023-5.027 4.207-8.02 7.178-8.346 7.895v7.91c0 2.285 2.281 4.075 5.193 4.075h.454v-7.024c0-2.175 1.484-2.499 2.368-2.499h4.055c.605 0 1.093.154 1.452.457.602.509.596 1.216.596 1.899zm.803 1.786h-1.862c-.584 0-1.059-.4-1.059-.893l.001-8.066c0-.181.002-.41-.015-.564h-3.971c-.09 0-.131.01-.14.013.004.005-.11.154-.11.7v7.917c0 .494-.474.893-1.059.893h-1.513c-4.03 0-7.31-2.629-7.31-5.862v-7.983c0-.39 0-1.58 8.972-9.088 1.677-1.405 4.332-1.424 6.038-.046 4.1 3.31 8.99 7.582 8.99 9.134v8.007c0 3.329-2.993 5.838-6.962 5.838"
        fill={color}
    		stroke={color}
	    	strokeWidth={1.33}
      />
    </Svg>
  )
}

export default Home