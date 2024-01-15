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


/**
 * About Me
 */
//region
interface AboutMeIdCardListViewPropsInterface {
  children: React.ReactNode[]
}

interface AboutMeIdCardListPropsInterface {
  idCardContentList: { title: string, content: string, $imageUrl: string }[]
}

//endregion

/**
 * Stack
 */

//region
interface StackGridViewPropsInterface extends ComponentChildrenPropsInterface{
  children: React.ReactNode[]
}

interface GridAreaPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
  $area: RuleSet<Object>
}

interface StackGridAreaViewPropsInterface extends ComponentChildrenPropsInterface{
  children: React.ReactNode
  $area: RuleSet<Object>
  $stackVisible: boolean
}

//endregion

/**
 * Project
 */

//region
interface InitPageContentPropsInterface {
  onCheckHandler: () => void
}

interface InitPageContentViewPropsInterface {
  children: React.ReactNode
  buttonComponent: React.ReactNode
  introduceText: string[]
}

interface ProjectBorderViewPropsInterface {
  children: React.ReactNode[]
  visible: boolean
}

interface ProjectTitleListPropsInterface {
  project: ProjectListInterface[]
  projectCheckHandler: (check: ProjectInterface) => void
}

interface BorderContentPropsInterface {
  project: ProjectListInterface | undefined
}

interface GridAreaLayoutPropsInterface extends ComponentChildrenPropsInterface {
  $area: RuleSet<object>
  children: React.ReactNode
  $checked: boolean
}
//endregion


/**
 * Education
 */

//region
interface EducationAreaPropsInterface extends ComponentChildrenPropsInterface {
  $area: RuleSet<object>
  children: React.ReactNode
}

interface EducationGridViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode
}

interface EducationAreaContentViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
}

interface EducationAreaContentPropsInterface {
  education: EducationArrayValueInterface
}

//endregion

/**
 * Error
 */

interface ErrorSectionViewPropsInterface extends ComponentChildrenPropsInterface {
  children: React.ReactNode[]
}