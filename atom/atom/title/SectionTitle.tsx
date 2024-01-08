import React, {useEffect, useState} from 'react'
import SectionTitleView from "@/atom/atom/title/SectionTitleView";


/**
 * Section 마다 존재하는 Title Container
 * @param title title String
 * @param id
 * @constructor
 */
export default function SectionTitle({title, id}: SectionTitlePropsInterface): React.JSX.Element {

  const [titleArray, setTitleArray] = useState<{ first: string, other: string }>({
    first: "",
    other: ""
  });

  useEffect(() => {
    if (title !== undefined) {
      setTitleArray(() => {
        return {
          first: title.substring(0, 1),
          other: title.substring(1, title?.length)
        }
      })
    }
  }, [title]);

  return (
    <SectionTitleView title={titleArray} id={id}/>
  )
}