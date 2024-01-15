import EducationGridView from "@/atom/molecules/education/grid/EducationGridView";
import {educationArray, educationImageArray} from "@/data/education_data";
import EducationArea from "@/atom/molecules/education/grid/area/EducationArea";
import ImageDiv from "@/atom/atom/ImageDiv";
import {EducationImageDivStyle} from "@/atom/molecules/education/EducationStyle";
import EducationAreaContent from "@/atom/molecules/education/grid/area/content/EducationAreaContent";


export default function EducationGrid() {
  return (
    <EducationGridView>
      {
        educationImageArray?.map((value, index) => {
          return (
            <EducationArea
              $area={value?.$area}
              key={`${value?.$area}-${value?.src}`}
            >
              <ImageDiv
                src={value?.src} alt={value?.alt}
                size={'300px'}
                $divStyle={
                  EducationImageDivStyle
                }
                fill={true}
              />
            </EducationArea>
          )
        })
      }
      {
        educationArray?.map((value, index) => {
          return (
            <EducationArea
              $area={value?.$area}
              key={`${value?.$area}-${value?.index}`}
            >
              <EducationAreaContent education={value}/>
            </EducationArea>
          )
        })
      }
    </EducationGridView>
  )
}