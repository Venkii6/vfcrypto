import React from 'react'
import styled from 'styled-components'
import { menuData } from './Dropdown/menuData'
import DropdownMenu from './Dropdown/DropdownMenu'

const Logo = styled.h1`

font-size: 32px;
`
const Title = styled.span`
`

const Caret = styled.span`
display: inline-block;
width: 0;
height: 0;
margin-left: 12px;
vertical-align: middle;
border-top: 4px dashed;
border-top: 4px solid;
border-right: 4px solid transparent;
border-left: 4px solid transparent;
`
const AppHeaderContainer = styled.div`
.nav-item {
top: 2px;
border-bottom: 1px solid #e7e7e7;
width: 55px;
height: 36px;
line-height: 3.5;
outline: none;
&:focus {
pointer-events: none;
cursor: pointer;
}

}
.nav-item:focus .dropdown {
opacity: 1;
visibility: visible;
pointer-events: auto;
outline: none;
}

`;


function AppHeader(props) {
	return (
		<AppHeaderContainer>
			<nav style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 260, paddingLeft: 160 }} className={props.className}>
			<Logo>VFCrypto</Logo>
			<ul>
				<li tabIndex="0" className="nav-item"><Title>{menuData[0].title}</Title><Caret />
					<DropdownMenu data={menuData} />
				</li>
			</ul>
			</nav>
		</AppHeaderContainer>
	);
	}
	
	export default AppHeader

