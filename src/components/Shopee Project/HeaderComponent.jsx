import { Box, Flex, Img, Link, Text } from '@chakra-ui/react';
import React from 'react'

const HeaderComponent = () => {
  return (
    <>
        <Box>
            <Flex w={'1200px'} h={'84px'} align={'center'} m={'0 auto'} justify={'space-between'}>
                <Flex align={'center'}>
                    <Img w={'11.875rem'} h={'42px'} mt={'-10px'} mr={'15px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png'/>
                    <Text fontSize={'1.5rem'} fontWeight={'400'}>Đăng nhập</Text>
                </Flex>
                <Box>
                    <Link href="" color={'orange'}>Bạn cần giúp đỡ?</Link>
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default HeaderComponent;