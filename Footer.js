import React from 'react'
import { View, HStack, Text, Box } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { menu } from './menu'

const Footer = () => {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				padding: 15,
				paddingTop: 5,
				borderColor: '#B3B3B3',
				borderTopWidth: 1,
				position: 'fixed',
				bottom: 0,
			}}
		>
			<HStack alignItems='center' justifyContent='space-between'>
				{menu.map((item, idx) => (
					<View
						key={`footer ${idx}`}
						style={{
							position: 'relative',
						}}
					>
						{idx === 2 && (
							<Box
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
									backgroundColor: '#4EBB62',
									borderRadius: 10,
									padding: 2,
									paddingRight: 5,
									paddingLeft: 5,
									zIndex: 2,
								}}
								_text={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 12,
								}}
							>
								10
							</Box>
						)}
						<MaterialIcons
							name={item.icon}
							size={34}
							style={{ textAlign: 'center' }}
							color={idx === 0 ? '#00A0FF' : '#525D6F'}
						/>
						<Text
							color={idx === 0 ? '#00A0FF' : '#525D6F'}
							style={{ fontSize: 12 }}
						>
							{item.title}
						</Text>
					</View>
				))}
			</HStack>
		</View>
	)
}

export default Footer
