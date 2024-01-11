import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


export const MenuButtonArray = (router : AppRouterInstance, themeHandler: () => void) : MenuButtonArrayInterface[] => {
  return [
    {
      content: 'INTRO',
      onClick: () => router.push('#intro'),
    },
    {
      content: 'ABOUT',
      onClick: () => router.push('#about'),
    },
    {
      content: 'STACK',
      onClick: () => router.push('#stack'),
    },
    {
      content: 'PROJECT',
      onClick: () => router.push('#project'),
    },
    {
      content: 'EDUCATION',
      onClick: () => router.push('#education'),
    },
    {
      content: 'THEME',
      onClick: themeHandler,
    },
  ]
}