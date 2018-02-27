// @flow
import * as actionTypes from '../actions/actionTypes'
import { all, call, fork, put } from 'redux-saga/effects'
import type { AllEffect } from 'redux-saga'
import rootSagas, {
  getAllIdeas,
  createIdea,
  updateIdea,
  deleteIdea,
  watchGetAllIdeas,
  watchCreateIdea,
  watchUpdateIdea,
  watchDeleteIdea
} from './'
import * as ideaService from '../services/ideaService'
import type { IdeaIdInfo, IdeaResult, IdeaResults } from '../services/ideaService'

describe('sagas', () => {
  const ideaIdInfo: IdeaIdInfo = { id: 1 }
  const ideaResults: IdeaResults = []
  const ideaResult: IdeaResult = {
    id: 1,
    body: 'here\'s body (...)',
    title: 'Title',
    created_date: new Date('2049')
  }

  it('exports a proper rootSagas object', () => {
    function * fakeRootSaga (): Generator<AllEffect, void, any> {
      yield all([
        fork(getAllIdeas),
        fork(watchGetAllIdeas),
        fork(watchCreateIdea),
        fork(watchUpdateIdea),
        fork(watchDeleteIdea)
      ])
    }

    const iterable = rootSagas()
    const expectedIterable = fakeRootSaga()

    expect(iterable.next().value).toEqual(expectedIterable.next().value)
  })

  describe('getAllIdeas', () => {
    it('follows a correct generator logic', () => {
      const iterable = getAllIdeas()

      expect(iterable.next().value).toEqual(call(ideaService.getAllIdeas))
      expect(iterable.next(ideaResults).value).toEqual(put({
        type: actionTypes.RECEIVE_ALL_IDEAS,
        payload: ideaResults
      }))
      expect(iterable.next().value).toEqual(put({
        type: actionTypes.REQUEST_GET_ALL_SUCCESS
      }))
      expect(iterable.next().done).toEqual(true)
    })
  })

  describe('createIdea', () => {
    it('follows a correct generator logic', () => {
      const iterable = createIdea({ payload: {} })

      expect(iterable.next().value).toEqual(call(ideaService.createIdea, {}))
      expect(iterable.next(ideaResult).value).toEqual(put({
        type: actionTypes.RECEIVE_NEW_IDEA,
        payload: ideaResult
      }))
      expect(iterable.next().value).toEqual(put({
        type: actionTypes.REQUEST_CREATE_SUCCESS
      }))
      expect(iterable.next().done).toEqual(true)
    })
  })

  describe('updateIdea', () => {
    it('follows a correct generator logic', () => {
      const iterable = updateIdea({ payload: {} })

      expect(iterable.next().value).toEqual(call(ideaService.updateIdea, {}))
      expect(iterable.next(ideaResult).value).toEqual(put({
        type: actionTypes.RECEIVE_UPDATED_IDEA,
        payload: ideaResult
      }))
      expect(iterable.next().value).toEqual(put({
        type: actionTypes.REQUEST_UPDATE_SUCCESS
      }))
      expect(iterable.next().done).toEqual(true)
    })
  })

  describe('deleteIdea', () => {
    it('follows a correct generator logic', () => {
      const iterable = deleteIdea({ payload: {} })

      expect(iterable.next().value).toEqual(call(ideaService.deleteIdea, {}))
      expect(iterable.next(ideaIdInfo).value).toEqual(put({
        type: actionTypes.RECEIVE_DELETED_IDEA,
        payload: ideaIdInfo
      }))
      expect(iterable.next().value).toEqual(put({
        type: actionTypes.REQUEST_DELETE_SUCCESS
      }))
      expect(iterable.next().done).toEqual(true)
    })
  })
})
