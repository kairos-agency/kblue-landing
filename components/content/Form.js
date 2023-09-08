/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import { useRouter } from 'next/router.js'

import { enForm } from '../../lang/en.js'
import { frForm } from '../../lang/fr.js'

function Form() {
	const content = useRouter().locale === 'en' ? enForm : frForm

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Sending')
		let data = {
			name,
			email
		}
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => {
			console.log('Response received', data)
			if (res.status === 200) {
				console.log('Response succeeded!')
				setSubmitted(true)
				setName('')
				setEmail('')
				setBody('')
			}
		})
	}
	return (
		<div className='demo-form'>
			<div>
				<p>{content.title}</p>
				<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 44 44'>
					<circle cx='22' cy='22' r='22' fill='#EAF1FD' />
					<path
						fill='#3F65FC'
						stroke='#3F65FC'
						strokeWidth='.5'
						d='M22.5 24c-.07 0-.1392-.0162-.2037-.0477l-9.9762-4.8889c-.0949-.047-.1759-.1255-.2328-.2257-.057-.1001-.0873-.2176-.0873-.3377 0-.1201.0303-.2376.0873-.3377.0569-.1002.1379-.1787.2328-.2257l9.9762-4.8889C22.3608 13.0162 22.43 13 22.5 13c.07 0 .1392.0162.2037.0477l9.9762 4.8889c.0949.047.1759.1255.2328.2257.057.1001.0873.2176.0873.3377 0 .1201-.0303.2376-.0873.3377-.0569.1002-.1379.1787-.2328.2257l-9.9762 4.8889C22.6392 23.9838 22.57 24 22.5 24Zm-8.6236-5.5L22.5 22.7252 31.1236 18.5 22.5 14.2748 13.8764 18.5Z'
					/>
					<path
						fill='#3F65FC'
						stroke='#3F65FC'
						strokeWidth='.5'
						d='M22.5 28c-.0699 0-.1392-.0159-.2037-.0468l-9.9748-4.7998c-.1284-.0618-.2301-.1793-.2826-.3267-.0261-.073-.0393-.1511-.0389-.2299.0004-.0788.0144-.1568.0411-.2294.0268-.0727.0658-.1386.1148-.194.0491-.0554.1072-.0992.171-.129.129-.0601.2736-.0592.402.0026L22.5 26.7484l9.7711-4.7014c.0636-.0306.1318-.0465.2008-.047.069-.0004.1373.0147.2012.0444.0638.0298.1219.0736.171.129.049.0554.088.1213.1148.194.0267.0726.0407.1506.0411.2294.0004.0788-.0128.1569-.0389.2299-.026.073-.0643.1394-.1128.1955-.0485.056-.1062.1006-.1698.1312l-9.9748 4.7998c-.0645.0309-.1338.0468-.2037.0468Z'
					/>
					<path
						fill='#3F65FC'
						stroke='#3F65FC'
						strokeWidth='.5'
						d='M22.5 32c-.0699 0-.1392-.0159-.2037-.0468l-9.9748-4.7998c-.1284-.0618-.2301-.1793-.2826-.3267-.0526-.1474-.0518-.3126.0022-.4593s.1568-.2629.2858-.323c.129-.0601.2736-.0592.402.0026L22.5 30.7484l9.7711-4.7014c.0636-.0306.1318-.0465.2008-.047.069-.0004.1373.0147.2012.0444.0638.0298.1219.0736.171.129.049.0554.088.1213.1148.194.0267.0726.0407.1506.0411.2294.0004.0788-.0128.1569-.0389.2299-.026.073-.0643.1394-.1128.1955-.0485.056-.1062.1006-.1698.1312l-9.9748 4.7998c-.0645.0309-.1338.0468-.2037.0468Z'
					/>
				</svg>
			</div>
			<form>
				<div className='form-group'>
					<label htmlFor='name'>{content.name}</label>
					<input
						type='text'
						onChange={(e) => {
							setName(e.target.value)
						}}
						name='name'
						id='name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>{content.email}</label>
					<input
						type='email'
						onChange={(e) => {
							setEmail(e.currentTarget.value)
						}}
						name='email'
						id='email'
					/>
				</div>
				<div className='form-group'>
					<button
						type='submit'
						onClick={(e) => {
							handleSubmit(e)
						}}
						className='btn btn-primary'
					>
						{content.submit}
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
