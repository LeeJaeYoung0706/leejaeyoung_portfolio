

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
