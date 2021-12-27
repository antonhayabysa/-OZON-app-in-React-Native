import React from 'react'
import {ScrollView} from 'react-native'
import {
    View,
    NativeBaseProvider,
    Box,
    Heading,
    Text,
    Image,
} from 'native-base'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {products} from './data/products'

function App() {
    return (
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <Header/>
                <ScrollView>
                    <Box style={{marginTop: 10}} p={5}>
                        <Heading size={'lg'} color='#111'>
                            Успей купить!
                        </Heading>
                        <View
                            mt={10}
                            flexDirection='row'
                            flexWrap='wrap'
                            justifyContent='space-between'
                        >
                            {products.map((product, idx) => (
                                <View key={`product ${idx}`} mb={10} mx={2} w='26%'>
                                    <Image
                                        size='lg'
                                        resizeMode='cover'
                                        source={{
                                            uri: product.image,
                                        }}
                                        alt={product.name}
                                    />
                                    <Text my={2} style={{fontWeight: 'bold'}}>
                                        {product.price.toLocaleString('ru-Ru', {
                                            style: 'currency',
                                            currency: 'RUB',
                                        })}
                                    </Text>
                                    <Text style={{fontSize: 14, height: 40}}>
                                        {product.name}
                                    </Text>

                                    <Box
                                        style={{
                                            backgroundColor: '#00A0FF',
                                            borderRadius: 8,
                                            marginTop: 20,
                                            width: 105,
                                        }}
                                        px={2}
                                        py={2}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                                color: '#fff',
                                            }}
                                        >
                                            В корзину
                                        </Text>
                                    </Box>
                                </View>
                            ))}
                        </View>
                    </Box>
                </ScrollView>
                <Footer/>
            </View>
        </NativeBaseProvider>
    )
}

export default App
