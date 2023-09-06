/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function Form() {
	return (
		<div className='demo-form'>
			<div>
				<p>Completely free</p>
				<img src='/images/blue-stack.svg' alt='demo' />
			</div>
			<form>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name' />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div className='form-group'>
					<button type='submit' className='btn btn-primary'>
						Get my demo
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
