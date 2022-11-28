import './Form.scss'
import React, { useEffect, useRef, useState } from "react"
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

export const Form = ({ addMessage, messages }) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: purple[500],
			},
			secondary: {
				main: 'rgb(109, 181, 179)',
			},
		}
	})

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [messages])

	const [value, setValue] = useState('')

	const handleChange = (e) => {
		setValue(e.target.value)
	}
	const handleClick = (e) => {
		e.preventDefault()
		addMessage('Me', value)
		setValue('')
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="message-form">
				<input className='message-input' value={value} onChange={handleChange} ref={inputRef} />
				<Button className='message-btn' variant="contained" color="secondary" onClick={handleClick} style={{ color: "#fff" }}>Отправить</Button>

				{/* <button className='message-btn' onClick={handleClick}>Отправить</button> */}
			</div>
		</ThemeProvider>
	)
}