import React from 'react';
import ContainerView from "@/atom/templates/ContainerView";


export default function Container({children}: ContainerPropsInterface) {


  /**
   * Children Props
   */
  // const props = {  scroll: scrollYCheck }
  // const childrenWithProps = Children.map(children , (children) => {
  //     if (isValidElement(children)) {
  //         return React.cloneElement(children as React.ReactElement<any> , { props });
  //     }
  //     return children;
  // });


  return (
      <ContainerView>
        {children}
      </ContainerView>
  )
}