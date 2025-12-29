/**
 * About Me
 */
//region
interface AboutMeViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode
}
//endregion

/**
 * Stack
 */


type Props =
  {
    front: StackItem[];
    back: StackItem[];
    etc: StackItem[];
  };



interface StackViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
  data: Props
}

/**
 * Project
 */

interface ProjectViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
}

/**
 * Education
 */

interface EducationViewPropsInterface extends ComponentPropsInterface {
  children: React.ReactNode
}
