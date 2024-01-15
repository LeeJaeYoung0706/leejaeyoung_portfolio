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

interface StackViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
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
