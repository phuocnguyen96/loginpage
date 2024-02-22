import { Box, Button, Flex, FormControl, FormLabel, Icon, Img, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import QR from './ShopeeQR.png';
import { RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import React from 'react'

const MainComponent = () => {
    return (
        <>
            <Box bgColor={'rgb(238, 78, 46)'}>
                <Flex bgImg={'https://down-vn.img.susercontent.com/file/sg-11134004-7rblj-lqn2045ns7l2ec'}
                    bgSize={'contain'}
                    bgRepeat={'no-repeat'}
                    bgPosition={'center'}
                    h={'600px'}
                    w={'1040px'}
                    m={'0 auto'}
                    align={'center'}
                    justify={'flex-end'}
                >
                    <Box bgColor={'white'}>
                        <Box w={'400px'} h={'482px'}>
                            <Box>
                                <Flex justify={'space-between'} p={'1.375rem 30px'} align={'center'}>
                                    <Text fontSize={'1.1rem'} maxW={'8.5rem'} lineHeight={'1.2'} >Đăng nhập</Text>
                                    <Flex ml={'1.25rem'} justify={'flex-end'} align={'center'}>
                                        <Box
                                            bgColor={'#fefaec'}
                                            p={'.6875rem .875rem'}
                                            color={'#ffbf00'}
                                            fontSize={'.875rem'}
                                            fontWeight={'700'}
                                            border={'2px solid #ffbf00'}
                                            mr={'0.5rem'}
                                        >
                                            Đăng nhập với mã QR
                                        </Box>
                                        <Img src={QR} />
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box p={'0 30px 30px'}>
                                <FormControl>
                                    <Input type='text' placeholder='Email/Số điện thoại/Tên đăng nhập' mb={'10px'} />
                                    <Box mb={'14px'}>
                                        <InputGroup
                                        >
                                            <Input type='password' placeholder='Mật khẩu' />
                                            <InputRightElement>
                                                <Icon as={RiEyeCloseLine} />
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                    <Button p={'0 .625rem'} m={'0 auto'} w={'340px'} opacity={'0.7'} bgColor={'#ee4d2d'} color={'#fff'} h={'2.5rem'}>ĐĂNG NHẬP</Button>
                                </FormControl>
                                <Flex justify={'space-between'} m={'10px 0'} color={'#05a'}>
                                    <Link>Quên mật khẩu</Link>
                                    <Link>Đăng nhập với SMS</Link>
                                </Flex>
                                <Flex pb={'14px'} align={'center'}>
                                    <Box
                                        h={'1px'}
                                        w={'100%'}
                                        bgColor={'#dbdbdb'}
                                        flex={'1'}
                                    ></Box>
                                    <Text fontSize={'.75rem'} p={'0 16px'} color={'#ccc'} textTransform={'uppercase'}>Hoặc</Text>
                                    <Box
                                        h={'1px'}
                                        w={'100%'}
                                        bgColor={'#dbdbdb'}
                                        flex={'1'}
                                    ></Box>
                                </Flex>
                                <Flex justify={'space-between'} m={'0 -5px'} wrap={'wrap'}>
                                    <Flex align={'center'} justify={'center'} color={'#000000de'} p={'0 2px'} h={'40px'} fontSize={'.875rem'} border={'1px solid #00000042'} borderRadius={'2px'} m={'5px'} flex={'1'} pr={'8px'}>
                                        <Icon as={FaFacebook} color={'blue'} mr={'5px'} boxSize={5}/>
                                        <Text>Facebook</Text>
                                    </Flex>
                                    <Flex align={'center'} justify={'center'} color={'#000000de'} p={'0 2px'} h={'40px'} fontSize={'.875rem'} border={'1px solid #00000042'} borderRadius={'2px'} m={'5px'} flex={'1'} pr={'8px'}>
                                        <Icon as={FcGoogle} mr={'5px'} boxSize={5}/>
                                        <Text>Google</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex fontSize={'.875rem'} color={'#00000042'} pr={'4px'} align={'center'} justify={'center'}>
                                    <Text mr={'4px'}>Bạn mới biết đến shopee?</Text>
                                    <Link color={'#ee4d2d'}>Đăng Ký</Link>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default MainComponent;