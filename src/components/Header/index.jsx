import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Button } from '@mui/material'

const Header = ({
	src,
	title,
	links,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				position: 'absolute',
				top: '0',
				left: '0',
				right: '0',
				p: '15px 50px',
				backgroundColor: 'white',
			}}
		>
			<Button
				startIcon={ <Avatar alt='logo' src={src} /> }
				sx={{
					fontSize: '1.1rem',
					color:'black',
				}}
				children={title}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				{
					links?.map(l => (
						<Button
							variant='text'
							children={l.title}
							onClick={l.onClick}
							sx={{
								fontSize: '.9rem',
								color:'#999',
							}}
						/>
					))
				}
			</Box>
		</Box>
	)
}

Header.propTypes = {
	links: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	})),
	src: PropTypes.string,
	title: PropTypes.string.isRequired,
}

export default Header