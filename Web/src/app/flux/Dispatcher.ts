import * as Flux from 'flux'
import Action from './Action'

class Dispatcher extends Flux.Dispatcher<Action> {

}

export default new Dispatcher();