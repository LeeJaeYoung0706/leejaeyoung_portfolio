import EducationAreaContentView from "@/atom/molecules/education/grid/area/content/EducationAreaContentView";
import {NanumGodicFont} from "@/styles/font/fontStyle";
import HTag from "@/atom/atom/HTag";
import {
  EducationGridContentTextDivStyle,
  EducationGridContentTitleStyle, EducationInnerDivStyle
} from "@/atom/molecules/education/grid/area/content/Styles";


export default function EducationAreaContent({education} : EducationAreaContentPropsInterface) {
  return (
    <EducationAreaContentView>
      {
        education?.partTitle?.map((value, index) => {
          return (
            <HTag content={value} $styles={EducationGridContentTitleStyle} index={3}
                  key={`${value}-${index}`} fontStyle={NanumGodicFont.className}/>
          )
        })
      }
      <hr/>
      {
        education?.content?.map((value, index) => {
          return (
            <EducationGridContentTextDivStyle className={NanumGodicFont.className}
                                           key={`${value}-${index}`}>
              <EducationInnerDivStyle dangerouslySetInnerHTML={{__html: value}}/>
            </EducationGridContentTextDivStyle>
          )
        })
      }
    </EducationAreaContentView>
  )
}