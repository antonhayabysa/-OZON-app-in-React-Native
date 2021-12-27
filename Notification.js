import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Box } from 'native-base'

const Notification = () => {
	return (
		<Box mr={1} style={{ position: 'relative' }}>
			<MaterialIcons name='notifications-none' color='#fff' size={35} />
			<Box
				style={{
					position: 'absolute',
					top: 0,
					right: -3,
					backgroundColor: '#E4304E',
					borderRadius: 10,
					padding: 2,
					paddingRight: 5,
					paddingLeft: 5,
				}}
				_text={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 12,
				}}
			>
				10
			</Box>
		</Box>
	)
}

export default Notification
