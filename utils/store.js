import { proxy } from 'valtio'

const state = proxy({
	plan: 'Basic'
})

export { state }
