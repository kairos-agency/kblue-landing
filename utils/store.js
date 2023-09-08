import { proxy } from 'valtio'

const state = proxy({
	plan: 'Basic',
	openedTab: 'CMS',
	loading: true
})

export { state }
