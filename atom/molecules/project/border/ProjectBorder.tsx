'use client'
import React, {useCallback, useEffect, useRef, useState} from "react";
import ProjectBorderView from "@/atom/molecules/project/border/ProjectBorderView";
import {initProjectList} from "@/data/project_data";
import InitPageContent from "@/atom/molecules/project/init_page/InitPageContent";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import UlTag from "@/atom/atom/list_tags/UlTag";
import {projectUlStyle} from "@/atom/molecules/project/border/Styles";
import LiTag from "@/atom/atom/list_tags/LiTag";
import ProjectTitleLi from "@/atom/atom/project/title/ProjectTitleLi";
import ProjectHighLightTitle from "@/atom/atom/project/title/ProjectHighLightTitle";
import ProjectTitleList from "@/atom/molecules/project/border/title/ProjectTitleList";
import ProjectContent from "@/atom/atom/project/border/ProjectContent";
import BorderContent from "@/atom/molecules/project/border/content/BorderContent";
import ProjectBorderContent from "@/atom/molecules/project/border/content/BorderContent";



/**
 * Project Container
 * @constructor
 */
export default function ProjectBorder(): React.JSX.Element {
  // Project Title 선택시 Flex 효과로 범위 주기 위해서 생성
  const [project, setProject] = useState<ProjectListInterface[]>(initProjectList);
  // project state 넘기는 핸들러
  const projectCheckHandler = useCallback((project: ProjectListInterface) => {
    if (!project.checked)
      return false;

    setProject((pre) => {
      const copy = [...pre];
      return copy.map((value) => {
        if (value.title === project.title)
          return {
            ...value,
            checked: project.checked,
          }
        else
          return {
            ...value,
            checked: false
          }
      })
    })

  }, [project])

  // Title Select
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const result = project?.filter((value) => value.checked);
    setChecked(() => result?.length > 0)
  }, [project]);

  // Check 시 list 에서 pop
  const selectProject = () => {
    const copy = [...project];
    return copy?.filter((project) => project.checked)?.pop()
  }

  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.01,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })

  return (
    <ProjectBorderView visible={visible} ref={ref}>
      <ProjectTitleList
        project={project}
        projectCheckHandler={projectCheckHandler}
      />
      {
        checked ?
          <>
            <ProjectHighLightTitle project={selectProject()}/>
            <ProjectBorderContent project={selectProject()}/>
          </> :
          <>
            <InitPageContent onCheckHandler={() => projectCheckHandler(
              {
                ...project[0],
                checked: true
              }
            )}
            />
          </>
      }

    </ProjectBorderView>
  )
}
