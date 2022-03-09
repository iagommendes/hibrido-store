import { ReactNode } from 'react'


import {
    BackgroundProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    OpacityProps,
    GridProps,
    BoxShadowProps
  } from 'styled-system'  
export interface OwnProps {}
  
  export type Props = {
    readonly children?: ReactNode
    readonly onClick?: () => void
  } & SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    BackgroundProps &
    PositionProps &
    OpacityProps &
    GridProps &
    BoxShadowProps