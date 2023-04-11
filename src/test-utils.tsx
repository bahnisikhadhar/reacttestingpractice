// this code is copied and then modified according to our need
// It is copied from : testing library => docs => framework => react testing library => Setup => typescript => custom render
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { AppProviders } from './components/providers/app-providers'



const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}