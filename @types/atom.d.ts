
/**
 * Common Interface
 */
//region
interface ContentInterface {
  content: React.ReactNode | string
}

interface ImageDivPropsInterface {
  alt: string
  src: string
  size: string
  $divStyle?: RuleSet<Object>
  $style?: React.CSSProperties
  fill: boolean
}

interface HTagComponentPropsInterface extends ContentInterface{
  index: number
  $styles?: RuleSet<Object>
  content: string
  fontStyle?: string
}


interface PTagPropsInterface {
  $styles?: RuleSet<Object>
  content: string
  font?: string
}

interface ButtonPropsInterface extends ContentInterface{
  content: React.ReactNode
  $style?: RuleSet<Object>
  onClick: () => void
  font: string
}

interface LiTagPropsInterface extends ContentInterface{
  content: React.ReactNode
  $style?: RuleSet<Object>
  handler?: () => void
}

interface UlTagPropsInterface extends ComponentChildrenPropsInterface{
  children: React.ReactNode[] | React.ReactNode
  $style?: RuleSet<Object>
}

interface SectionTitlePropsInterface {
  title: string
  id: string
}

interface SectionTitleViewPropsInterface {
  title: { first: string, other: string }
  id: string
}
//endregion

/**
 * Header Interface
 */
//region
interface LogoComponentPropsInterface {
  logoText: string
  logoFont?: string
  checked: boolean
}
interface HeaderHamburgerButtonInterface {
  checked: boolean
  onClick: () => void
}

interface HeaderMobileMenuListPropsInterface {
  checked: boolean
  onClick: () => void
  children?: React.ReactNode
}
//endregion

/**
 * About Me
 */
//region
interface AboutMeIdCardContentPropsInterface {
  content: string
}

interface AboutMeIdCardPropsInterface {
  content: string
  title: string
  imageUrl: string
}

interface AboutMeIdCardViewPropsInterface extends ComponentPropsInterface {
  children: React.ReactNode
}

interface AboutMeIdTitleViewPropsInterface {
  font: string,
  title: string
}

interface AboutMeIdTitlePropsInterface {
  font: string,
  title: string,
  imageUrl: string
}

interface AboutMeIdTitleImagePropsInterface {
  title: string,
  imageUrl: string
}

interface AboutMeIdCardContentArrayValueInterface {
  title: string,
  content: string,
  $imageUrl: string
}


//endregion

/**
 * Stack
 */

//region
interface StackGridLogoTitlePropsInterface {
  title: string
}

interface StackLogoViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode
}

interface StackLogoImageInterface {
  src: string,
  alt: string,
  size: string
}

interface StackLogoInterface {
  src: string,
  alt: string,
  text: string
}

interface StackLogoArrayValueInterface {
  text: string,
  src: string,
  alt: string
}
//endregion

/**
 * Project
 */

//region
interface ProjectTextAnimationPropsInterface {
  visible: boolean
  content: string[]
}

interface ProjectTitleLiViewPropsInterface {
  title: string
  checked: boolean
  liOnClick: () => void
}

interface ProjectTitleLiPropsInterface {
  project: ProjectInterface
  projectCheckHandler: (check: ProjectInterface) => void
}
interface ProjectHighLightTitlePropsInterface {
  project: ProjectListInterface | undefined
}

interface ProjectSlideTitleDivPropsInterface {
  title: string,
  position: boolean
}

interface ProjectContentPropsInterface {
  content: string[]
}

interface ProjectContentTextPartPropsInterface {
  content:  string[]
}

interface ProjectLinkTagInterface {
  link: string
  $area: RuleSet<Object>
}
//endregion

/**
 * Education
 */

//region
interface EducationArrayValueInterface {
  index: number,
  $area: RuleSet<Object>,
  partTitle: string[],
  content: string[]
}
interface EducationImageArrayValueInterface {
  $area: RuleSet<Object>,
  src: string,
  alt: string
}

//endregion

