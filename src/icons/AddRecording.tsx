import * as React from "react"
import Svg, { SvgProps, G, Path, Ellipse } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 18 18"
      {...props}
    >
      <G strokeWidth={30.955}>
        <Path d="M7.397.67a2.987 2.987 0 00-1.501.743c-.448.41-.723.866-.866 1.442-.056.217-.06.485-.06 3.479v3.242l.077.268c.318 1.092 1.19 1.876 2.324 2.096.374.07 1.04.048 1.392-.047 1.15-.318 2.01-1.272 2.155-2.396.02-.15.037-.865.037-1.643V6.478l-.279-.078c-.965-.28-1.783-.973-2.178-1.842-.219-.485-.275-.765-.275-1.341 0-.44.013-.541.09-.809.142-.507.434-1.033.762-1.37.07-.072.12-.144.11-.16C9.157.834 8.65.689 8.401.651a3.596 3.596 0 00-1.005.02z" />
        <Path d="M11.185.605a2.725 2.725 0 00-1.263.635c-.61.548-.878 1.134-.878 1.918 0 .428.07.736.248 1.095.465.929 1.41 1.495 2.487 1.492.553 0 1.04-.138 1.482-.418.464-.296.752-.605.98-1.064a2.47 2.47 0 00-.228-2.604C13.387.8 12.28.387 11.185.605zM12.193 1.8c.06.056.066.104.066.472v.41h.431c.567 0 .564-.004.564.468 0 .334-.003.347-.086.41-.08.06-.133.066-.497.066h-.412v.406c0 .403 0 .409-.086.472-.076.057-.136.066-.41.066-.475 0-.478-.006-.491-.532l-.014-.412h-.41c-.395 0-.419-.003-.495-.079-.076-.07-.083-.098-.083-.387 0-.268.01-.324.07-.397.066-.082.073-.082.497-.082h.428v-.39c0-.346.007-.397.07-.472.066-.079.08-.082.43-.082.319 0 .368.006.428.063z" />
      </G>
      <Path
        d="M3.008 8.528c.275 1.336.55 2.671 1.429 3.676.879 1.005 2.36 1.679 3.74 1.637 1.38-.042 2.66-.8 3.434-1.79.774-.992 1.042-2.218 1.311-3.444"
        fill="none"
        stroke="#000"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        //paintOrder="fill markers stroke"
      />
      <Ellipse
        cx={8.148}
        cy={16.367}
        rx={1.146}
        ry={0.409}
        fill="none"
        stroke="#000"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        //paintOrder="fill markers stroke"
      />
    </Svg>
  )
}

export default SvgComponent