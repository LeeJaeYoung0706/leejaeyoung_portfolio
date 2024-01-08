

/**
 * Common Interface
 */
//region
interface ContentInterface {
  content: React.ReactNode | string
}

interface HTagComponentPropsInterface extends ContentInterface{
  index: number
  $styles?: RuleSet<Object>
  content: string
  fontStyle?: string
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


//endregion