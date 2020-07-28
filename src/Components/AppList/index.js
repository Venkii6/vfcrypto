import React from 'react'
import ListHeader from './ListHeader'
import ListItem from './ListItem'
import styled from 'styled-components'

const Tr = styled.tr`
	&:hover {
		color: #949aad;
		background-color: #ebf1f5;
	}
`
const AppList = ({ columns, data, className, onRowClick, currency,date }) => (
	<table className={className}>
		<ListHeader columns={columns} />
		<tbody>
			{data.map(row => (
				<Tr onClick={() => onRowClick(row)}>
					{
						columns.map(column => (
							<ListItem component={column.component}
								align={column.align}
								data={row} currency={currency} />
						))
					}
				</Tr>
			))}
		</tbody>
	</table>
)

export default AppList;