// @flow
import * as fetchService from './fetch'

type IdeaResult = {
  id: number,
  title: string,
  body: string,
  created_date: Date
}

type IdeaRequest = IdeaResult

type IdeaResults = Array<IdeaResult>

type IdeaIdInfo = {
  id: number
}

const headers: Headers = new Headers({
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
})

export const getAllIdeas = async (): Promise<IdeaResults> => {
  const allIdeas: IdeaResults = await fetchService.request(`http://localhost:8000/api/ideas`)

  return allIdeas
}

export const createIdea = async (idea: IdeaRequest): Promise<IdeaResult> => {
  const options: RequestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(idea)
  }

  const allIdeas: IdeaResult = await fetchService.request(
    'http://localhost:8000/api/ideas/new', options
  )

  return allIdeas
}

export const updateIdea = async (idea: IdeaRequest): Promise<IdeaResult> => {
  console.log(idea)
  const options: RequestOptions = {
    method: 'PATCH',
    headers,
    body: JSON.stringify(idea)
  }
  const allIdeas: IdeaResult = await fetchService.request(
    `http://localhost:8000/api/ideas/update/${idea.id}`, options
  )

  return allIdeas
}

export const deleteIdea = async (ideaId: number): Promise<IdeaIdInfo> => {
  const options: RequestOptions = {
    method: 'DELETE',
    headers
  }
  const allIdeas: IdeaIdInfo = await fetchService.request(
    `http://localhost:8000/api/ideas/delete/${ideaId}`, options
  )

  return allIdeas
}

export type { IdeaIdInfo, IdeaResult, IdeaResults, IdeaRequest }
