import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

class XMLHttpRequest {
  open () {}
  send () {}
}

const localStorage = {
  getItem () { return null },
  setItem () {}
}

// AJAX etc
global.XMLHttpRequest = XMLHttpRequest
global.localStorage = localStorage
