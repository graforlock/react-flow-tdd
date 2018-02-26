// @flow
import * as fetchService from './fetch'

type IdeaResult = {
  id: number,
  title: string,
  body: string,
  created_date: Date
}

type IdeaResults = Array<IdeaResult>

type IdeaIdInfo = {
  id: number
}

export const getAllIdeas = async (): Promise<IdeaResults> => {
  const allIdeas: IdeaResults = await fetchService.request(`http://localhost:8000/api/ideas`)

  return allIdeas
}

export const createIdea = async (): Promise<IdeaResult> => {
  const allIdeas: IdeaResult = await fetchService.request(`http://localhost:8000/api/ideas`)

  return allIdeas
}

export const updateIdea = async (): Promise<IdeaResult> => {
  const allIdeas: IdeaResult = await fetchService.request(`http://localhost:8000/api/ideas`)

  return allIdeas
}

export const deleteIdea = async (): Promise<IdeaIdInfo> => {
  const allIdeas: IdeaIdInfo = await fetchService.request(`http://localhost:8000/api/ideas`)

  return allIdeas
}

export type { IdeaIdInfo, IdeaResult, IdeaResults }
