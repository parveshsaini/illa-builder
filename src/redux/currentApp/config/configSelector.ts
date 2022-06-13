import { RootState } from "@/store"
import { createSelector } from "@reduxjs/toolkit"

export const isOpenLeftPanel = (state: RootState) => {
  return state.currentApp.config.openLeftPanel
}

export const isOpenBottomPanel = (state: RootState) => {
  return state.currentApp.config.openBottomPanel
}

export const isOpenRightPanel = (state: RootState) => {
  return state.currentApp.config.openRightPanel
}

export const getUnitSize = (state: RootState) => {
  return state.currentApp.config.unitSize
}

export const isShowDot = (state: RootState) => {
  return state.currentApp.config.showDot
}

export const getSelectedComponents = (state: RootState) => {
  return state.currentApp.config.selectedComponents
}

export const getSelectedComponentsDisplayName = createSelector(
  [getSelectedComponents],
  (selectedComponents) => {
    return selectedComponents.map((component) => component.displayName)
  },
)
