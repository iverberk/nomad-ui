import { delay, eventChannel } from 'redux-saga'
import { fork, take, call, put } from 'redux-saga/effects'

export const APP_DRAWER_CLOSE = 'APP_DRAWER_CLOSE';
export const APP_DRAWER_OPEN = 'APP_DRAWER_OPEN';
export const APP_ERROR = 'APP_ERROR'
export const CHANGE_TASK_GROUP_COUNT = 'CHANGE_TASK_GROUP_COUNT'
export const CLEAR_CONSUL_KV_PAIR = 'CLEAR_CONSUL_KV_PAIR';
export const CLEAR_ERROR_NOTIFICATION = 'CLEAR_ERROR_NOTIFICATION'
export const CLEAR_FILE_PATH = 'CLEAR_FILE_PATH'
export const CLEAR_RECEIVED_FILE_DATA = 'CLEAR_RECEIVED_FILE_DATA'
export const CLEAR_SUCCESS_NOTIFICATION = 'CLEAR_SUCCESS_NOTIFICATION'
export const DELETE_CONSUL_KV_FOLDER = 'DELETE_CONSUL_KV_FOLDER'
export const DELETE_CONSUL_KV_PAIR = 'DELETE_CONSUL_KV_PAIR';
export const DEREGISTER_CONSUL_SERVICE = 'DEREGISTER_CONSUL_SERVICE';
export const DEREGISTER_CONSUL_SERVICE_CHECK = 'DEREGISTER_CONSUL_SERVICE_CHECK';
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION'
export const EVALUATE_JOB = 'EVALUATE_JOB';
export const FETCH_CLIENT_STATS = 'FETCH_CLIENT_STATS'
export const FETCH_CONSUL_REGIONS = 'FETCH_CONSUL_REGIONS';
export const FETCH_DIR = 'FETCH_DIR'
export const FETCH_MEMBER = 'FETCH_MEMBER'
export const FETCH_NODE = 'FETCH_NODE'
export const FETCH_NOMAD_REGIONS = 'FETCH_NOMAD_REGIONS';
export const FETCHED_ALLOC = 'FETCHED_ALLOC'
export const FETCHED_ALLOCS = 'FETCHED_ALLOCS'
export const FETCHED_CLIENT_STATS = 'FETCHED_CLIENT_STATS';
export const FETCHED_CLUSTER_STATISTICS = 'FETCHED_CLUSTER_STATISTICS'
export const FETCHED_CONSUL_KV_PAIR = 'FETCHED_CONSUL_KV_PAIR';
export const FETCHED_CONSUL_KV_PATH = 'FETCHED_CONSUL_KV_PATH'
export const FETCHED_CONSUL_NODE = 'FETCHED_CONSUL_NODE';
export const FETCHED_CONSUL_NODES = 'FETCHED_CONSUL_NODES';
export const FETCHED_CONSUL_REGIONS = 'FETCHED_CONSUL_REGIONS';
export const FETCHED_CONSUL_SERVICE = 'FETCHED_CONSUL_SERVICE';
export const FETCHED_CONSUL_SERVICES = 'FETCHED_CONSUL_SERVICES';
export const FETCHED_DIR = 'FETCHED_DIR'
export const FETCHED_EVAL = 'FETCHED_EVAL'
export const FETCHED_EVALS = 'FETCHED_EVALS'
export const FETCHED_FILE = 'FETCHED_FILE'
export const FETCHED_JOB = 'FETCHED_JOB'
export const FETCHED_JOBS = 'FETCHED_JOBS'
export const FETCHED_MEMBER = 'FETCHED_MEMBER'
export const FETCHED_MEMBERS = 'FETCHED_MEMBERS'
export const FETCHED_NODE = 'FETCHED_NODE'
export const FETCHED_NODES = 'FETCHED_NODES'
export const FETCHED_NOMAD_REGIONS = 'FETCHED_NOMAD_REGIONS';
export const GET_CONSUL_KV_PAIR = 'GET_CONSUL_KV_PAIR';
export const JOB_HIDE_DIALOG = 'JOB_HIDE_DIALOG'
export const JOB_SHOW_DIALOG = 'JOB_SHOW_DIALOG'
export const SET_CONSUL_KV_PAIR = 'SET_CONSUL_KV_PAIR';
export const SET_CONSUL_REGION = 'SET_CONSUL_REGION';
export const SET_NOMAD_REGION = 'SET_NOMAD_REGION';
export const STOP_JOB = 'STOP_JOB'
export const SUBMIT_JOB = 'SUBMIT_JOB'
export const SUCCESS_NOTIFICATION = 'SUCCESS_NOTIFICATION'
export const UNKNOWN_CONSUL_REGION = 'UNKNOWN_CONSUL_REGION';
export const UNKNOWN_NOMAD_REGION = 'UNKNOWN_NOMAD_REGION';
export const UNWATCH_ALLOC = 'UNWATCH_ALLOC'
export const UNWATCH_ALLOCS = 'UNWATCH_ALLOCS'
export const UNWATCH_ALLOCS_SHALLOW = 'UNWATCH_ALLOCS_SHALLOW'
export const UNWATCH_CLIENT_STATS = 'UNWATCH_CLIENT_STATS'
export const UNWATCH_CLUSTER_STATISTICS = 'UNWATCH_CLUSTER_STATISTICS'
export const UNWATCH_CONSUL_KV_PATH = 'UNWATCH_CONSUL_KV_PATH'
export const UNWATCH_CONSUL_NODE = 'UNWATCH_CONSUL_NODE';
export const UNWATCH_CONSUL_NODES = 'UNWATCH_CONSUL_NODES';
export const UNWATCH_CONSUL_SERVICE = 'UNWATCH_CONSUL_SERVICE';
export const UNWATCH_CONSUL_SERVICES = 'UNWATCH_CONSUL_SERVICES';
export const UNWATCH_EVAL = 'UNWATCH_EVAL'
export const UNWATCH_EVALS = 'UNWATCH_EVALS';
export const UNWATCH_FILE = 'UNWATCH_FILE'
export const UNWATCH_JOB = 'UNWATCH_JOB'
export const UNWATCH_JOBS = 'UNWATCH_JOBS'
export const UNWATCH_MEMBER = 'UNWATCH_MEMBER'
export const UNWATCH_MEMBERS = 'UNWATCH_MEMBERS'
export const UNWATCH_NODE = 'UNWATCH_NODE'
export const UNWATCH_NODES = 'UNWATCH_NODES';
export const WATCH_ALLOC = 'WATCH_ALLOC'
export const WATCH_ALLOCS = 'WATCH_ALLOCS'
export const WATCH_ALLOCS_SHALLOW = 'WATCH_ALLOCS_SHALLOW'
export const WATCH_CLIENT_STATS = 'WATCH_CLIENT_STATS'
export const WATCH_CLUSTER_STATISTICS = 'WATCH_CLUSTER_STATISTICS'
export const WATCH_CONSUL_KV_PATH = 'WATCH_CONSUL_KV_PATH'
export const WATCH_CONSUL_NODE = 'WATCH_CONSUL_NODE';
export const WATCH_CONSUL_NODES = 'WATCH_CONSUL_NODES';
export const WATCH_CONSUL_SERVICE = 'WATCH_CONSUL_SERVICE';
export const WATCH_CONSUL_SERVICES = 'WATCH_CONSUL_SERVICES';
export const WATCH_EVAL = 'WATCH_EVAL'
export const WATCH_EVALS = 'WATCH_EVALS';
export const WATCH_FILE = 'WATCH_FILE'
export const WATCH_JOB = 'WATCH_JOB'
export const WATCH_JOBS = 'WATCH_JOBS';
export const WATCH_MEMBER = 'WATCH_MEMBER'
export const WATCH_MEMBERS = 'WATCH_MEMBERS'
export const WATCH_NODE = 'WATCH_NODE'
export const WATCH_NODES = 'WATCH_NODES';

function subscribe (socket) {
  return eventChannel((emit) => {

    socket.eventChannel = emit;

    socket.onclose = (err) => {
      emit({
        type: APP_ERROR,
        payload: {
          error: err,
          source: 'ws_onclose',
          reason: 'WebSocket connection was closed, please reload the window to retry (no automatic retry will be made)'
        }
      })

      throw err;
    }

    socket.onerror = (err) => {
      emit({
        type: APP_ERROR,
        payload: {
          error: err,
          source: 'ws_onerror'
        }
      })

      throw err;
    }

    // eslint-disable-next-line no-param-reassign
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      emit({
        type: data.Type,
        payload: data.Payload,
        index: data.Index,
      })
    }

    return () => {}
  })
}

function* read (socket) {
  const channel = yield call(subscribe, socket)
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}

function* write (socket) {
  while (true) {
    const action = yield take([
      APP_ERROR,
      CHANGE_TASK_GROUP_COUNT,
      DELETE_CONSUL_KV_FOLDER,
      DELETE_CONSUL_KV_PAIR,
      DEREGISTER_CONSUL_SERVICE_CHECK,
      DEREGISTER_CONSUL_SERVICE,
      EVALUATE_JOB,
      FETCH_CLIENT_STATS,
      FETCH_CONSUL_REGIONS,
      FETCH_DIR,
      FETCH_MEMBER,
      FETCH_NODE,
      FETCH_NOMAD_REGIONS,
      GET_CONSUL_KV_PAIR,
      SET_CONSUL_KV_PAIR,
      STOP_JOB,
      SUBMIT_JOB,
      UNWATCH_ALLOC,
      UNWATCH_ALLOCS_SHALLOW,
      UNWATCH_ALLOCS,
      UNWATCH_CLIENT_STATS,
      UNWATCH_CLUSTER_STATISTICS,
      UNWATCH_CONSUL_KV_PATH,
      UNWATCH_CONSUL_NODE,
      UNWATCH_CONSUL_NODES,
      UNWATCH_CONSUL_SERVICE,
      UNWATCH_CONSUL_SERVICES,
      UNWATCH_EVAL,
      UNWATCH_EVALS,
      UNWATCH_FILE,
      UNWATCH_JOB,
      UNWATCH_JOBS,
      UNWATCH_MEMBER,
      UNWATCH_MEMBERS,
      UNWATCH_NODE,
      UNWATCH_NODES,
      WATCH_ALLOC,
      WATCH_ALLOCS_SHALLOW,
      WATCH_ALLOCS,
      WATCH_CLIENT_STATS,
      WATCH_CLUSTER_STATISTICS,
      WATCH_CONSUL_KV_PATH,
      WATCH_CONSUL_NODE,
      WATCH_CONSUL_NODES,
      WATCH_CONSUL_SERVICE,
      WATCH_CONSUL_SERVICES,
      WATCH_EVAL,
      WATCH_EVALS,
      WATCH_FILE,
      WATCH_JOB,
      WATCH_JOBS,
      WATCH_MEMBER,
      WATCH_MEMBERS,
      WATCH_NODE,
      WATCH_NODES,
    ])

    socket.send(JSON.stringify(action))
  }
}

function* transport (socket) {
  yield fork(read, socket)
  yield fork(write, socket)
}

function connectTo (url) {
  const socket = new WebSocket(url)

  const resolver = (resolve, reject) => {
    const timeout = setTimeout(() => {
      reject('Unable to connect to the backend...')
    }, 2000)

    socket.onopen = () => {
      resolve(socket)
      clearTimeout(timeout)
    }
  }

  return new Promise(resolver.bind(socket))
}

function* events (socket) {
  while (true) {
    yield call(transport, socket)
    yield delay(5000)
  }
}

export default function eventSaga () {
  return new Promise((resolve, reject) => {
    const parser = document.createElement('a');
    parser.href = window.NOMAD_ENDPOINT

    const host = parser.host ? parser.host : document.location.host
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    let relPath = document.location.pathname.replace(parser.pathname, '/').replace("//", "/")
    let wsRoot = `${protocol}//${host}`
    let wsURL = `/${parser.pathname}/ws`.replace("//", "/")

    // inside nomad scope
    if (relPath.indexOf('/nomad') === 0) {
      wsURL = wsURL + '/nomad'
      relPath = relPath.replace('/nomad/', '').split('/')[0]
      if (relPath) {
        wsURL = wsURL + '/' + relPath
      }
    }

    // inside consul scope
    if (relPath.indexOf('/consul') === 0) {
      wsURL = wsURL + '/consul'
      relPath = relPath.replace('/consul/', '').split('/')[0]
      if (relPath) {
        wsURL = wsURL + '/' + relPath
      }
    }

    // cleanup double slashes, yes, dirty hack :)
    wsURL = wsURL.replace("//", "/")

    const p = connectTo(wsRoot + wsURL)

    return p
      .then((socket) => {
        resolve(function* eventGenerator () {
          yield fork(events, socket)
        })
      })
      .catch((err) => {
        reject(err);
      })
  })
}
