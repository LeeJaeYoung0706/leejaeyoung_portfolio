import {
  FunctionsGrid,
  FunctionsTitleGrid, IntroductionGrid,
  IntroductionTitleGrid, ResponsibilitiesGrid,
  ResponsibilitiesTitleGrid, ReviewGrid,
  ReviewTitleGrid
} from "@/atom/molecules/project/border/grid/StyleGridArea";


export const projectGridArray = (project: ProjectListInterface) => [
  {
    $area: IntroductionTitleGrid,
    $checked: true,
    key: `${project}-grid1`
  },
  {
    $area: ResponsibilitiesTitleGrid,
    $checked: true,
    key: `${project}-grid2`
  },
  {
    $area: ReviewTitleGrid,
    $checked: true,
    key: `${project}-grid3`
  },
  {
    $area: FunctionsTitleGrid,
    $checked: true,
    key: `${project}-grid4`
  },

  {
    $area: IntroductionGrid,
    $checked: false,
    key: `${project}-${project?.introductionTitle}`,
    title: '소개',
    position: false,
    content: [project?.introductionTitle || '', project?.introduction || '']
  },
  {
    $area: ResponsibilitiesGrid,
    $checked: false,
    key: `${project}-${project?.responsibilities}`,
    title: '담당',
    position: true,
    content: [project?.responsibilities] || []
  },
  {
    $area: FunctionsGrid,
    $checked: false,
    key: `${project}-${project?.functions}`,
    title: '기능',
    position: false,
    content: [project?.functions] || []
  },
  {
    $area: ReviewGrid,
    $checked: false,
    key: `${project}-${project?.review}`,
    title: '후기',
    position: true,
    content: [project?.review] || []
  }
]