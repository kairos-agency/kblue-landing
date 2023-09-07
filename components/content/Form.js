/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function Form() {
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
				<p>Ask for a demo</p>
				<img src='/images/blue-stack.svg' alt='demo' />
			</div>
			<form>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
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
					<label htmlFor='email'>Email</label>
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
						Get my demo
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
