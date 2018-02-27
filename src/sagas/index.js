// @flow
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import type { AllEffect, ForkEffect, Effect } from 'redux-saga'
import * as actionTypes from '../actions/actionTypes'
import type { IdeaFetchAction, IdeaIdInfo, IdeaResult, IdeaResults } from '../types'

import * as ideaService from '../services/ideaService'

export function * getAllIdeas (): Generator<Effect, void, any> {
  try {
    const allIdeasResponse: IdeaResults = yield call(ideaService.getAllIdeas)
    yield put({ type: actionTypes.RECEIVE_ALL_IDEAS, payload: allIdeasResponse })
    yield put({ type: actionTypes.REQUEST_GET_ALL_SUCCESS })
  } catch (e) {
    console.error(e)
    yield put({ type: actionTypes.REQUEST_GET_ALL_FAILURE })
  }
}

export function * createIdea (action: IdeaFetchAction): Generator<Effect, void, any> {
  try {
    const newIdeaResponse: IdeaResult = yield call(ideaService.createIdea, action.payload)
    yield put({ type: actionTypes.RECEIVE_NEW_IDEA, payload: newIdeaResponse })
    yield put({ type: actionTypes.REQUEST_CREATE_SUCCESS })
  } catch (e) {
    console.error(e)
    yield put({ type: actionTypes.REQUEST_CREATE_FAILURE })
  }
}

export function * updateIdea (action: IdeaFetchAction): Generator<Effect, void, any> {
  try {
    const updateIdeaResponse: IdeaResult = yield call(ideaService.updateIdea, action.payload)
    yield put({ type: actionTypes.RECEIVE_UPDATED_IDEA, payload: updateIdeaResponse })
    yield put({ type: actionTypes.REQUEST_UPDATE_SUCCESS })
  } catch (e) {
    console.error(e)
    yield put({ type: actionTypes.REQUEST_UPDATE_FAILURE })
  }
}

export function * deleteIdea (action: IdeaFetchAction): Generator<Effect, void, any> {
  try {
    const deleteIdeaResponse: IdeaIdInfo = yield call(ideaService.deleteIdea, action.payload)
    yield put({ type: actionTypes.RECEIVE_DELETED_IDEA, payload: deleteIdeaResponse })
    yield put({ type: actionTypes.REQUEST_DELETE_SUCCESS })
  } catch (e) {
    console.error(e)
    yield put({ type: actionTypes.REQUEST_DELETE_FAILURE })
  }
}

export function * watchGetAllIdeas (): Generator<ForkEffect<*, *, *>, void, any> {
  yield takeEvery(actionTypes.FETCH_GET_ALL_IDEAS, getAllIdeas)
}

export function * watchCreateIdea (): Generator<ForkEffect<*, *, *>, void, any> {
  yield takeEvery(actionTypes.FETCH_CREATE_IDEA, createIdea)
}

export function * watchUpdateIdea (): Generator<ForkEffect<*, *, *>, void, any> {
  yield takeEvery(actionTypes.FETCH_UPDATE_IDEA, updateIdea)
}

export function * watchDeleteIdea (): Generator<ForkEffect<*, *, *>, void, any> {
  yield takeEvery(actionTypes.FETCH_DELETE_IDEA, deleteIdea)
}

export default function * rootSaga (): Generator<AllEffect, void, any> {
  yield all([
    fork(getAllIdeas),
    fork(watchGetAllIdeas),
    fork(watchCreateIdea),
    fork(watchUpdateIdea),
    fork(watchDeleteIdea)
  ])
}
