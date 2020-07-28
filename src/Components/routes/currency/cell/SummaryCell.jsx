import React from 'react'
import styled from 'styled-components'
import Label from './Label'

const Cell = styled.div`
	flex: 1;
	${Label} {
		margin-bottom: 25px;
	}
`

const SummaryItem = styled.div`
	display: flex;
	align-items: center;	
	color: #fff;
	font-size: 20px
	padding: 2px;
`

export default ({ children, label }) => (
	<Cell>
		<Label>
			{label}
		</Label>
		<SummaryItem>
			{children}
		</SummaryItem>
	</Cell>
)