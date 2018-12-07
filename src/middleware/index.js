import checker from './checker'
import logger from './logger'
import trunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    trunk,
    checker,
    logger
)