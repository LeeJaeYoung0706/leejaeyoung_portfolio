/**
 * Header Interface
 */

//region
interface HeaderPcMenuInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode
  $isTop: boolean
}

interface MobileMenuPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
}

interface MobileMenuInterface {
  checked: boolean,
  checkHandler: () => void
}

interface MenuButtonArrayInterface {
  content: string,
  onClick: () => void,
  checked?: boolean
}

//endregion