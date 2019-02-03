import * as Flux from 'flux'
import { Action } from './actions/Action'

class Dispatcher extends Flux.Dispatcher<Action> {

}

export default new Dispatcher();