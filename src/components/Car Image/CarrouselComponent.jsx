import { Box, Center, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const CarrouselComponent = () => {
    return (
        <>
            <Center bgImg={'https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-2-html/HTML/main/img/car-1.jpg'} height={'360px'} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'} textAlign={'center'} >
                <Box p={'auto 0'}>
                    <Text textColor={'white'} fontWeight={'600'} fontSize={'30px'} >SHOP LIST</Text>
                    <List textColor={'white'} fontWeight={'400'} fontSize={'16px'}>
                        <ListItem display={'inline-block'}>Home</ListItem>
                        <ListItem display={'inline-block'}>/ Shop List</ListItem>
                    </List>
                </Box>
            </Center>
        </>
    )
}

export default CarrouselComponent;