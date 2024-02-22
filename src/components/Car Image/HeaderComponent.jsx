import { EmailIcon, PhoneIcon, Search2Icon, TimeIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Icon, Image, List, ListItem, transform, } from '@chakra-ui/react'
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import React from 'react'

const HeaderComponent = () => {
    return (
        <Box>
            <Flex bg={'red'} p={'15px'} className='header' justify={'space-around'}>
                <Box textColor={'white'} className='header-left'>
                    <Link mr={'20px'} href="blank"><PhoneIcon mr={'5px'} />+55-4XX-634-7071</Link>
                    <Link mr={'20px'} href="blank"><EmailIcon mr={'5px'} />info@themevessel.com</Link>
                    <Link mr={'20px'} href="blank"><TimeIcon mr={'5px'} />Mon - Sun: 8:00am - 6:00pm</Link>
                </Box>
                <Box className='header-right' color={'white'}>
                    <span><Icon as={CiLogin} mr={'3px'} />login</span>
                    <span><Icon as={FaUser} mr={'3px'} />register</span>
                </Box>
            </Flex>
            <Flex className='header-main' justify={'space-around'}>
                <Image src='https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-2-html/HTML/main/img/logos/black-logo.png' alt='carimage'></Image>
                <Box className='header-right'>
                    <List className='header-nav' >
                        <ListItem display={'inline-block'} p={'40px 15px'}>home</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>car listing</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>pages</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>shop</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>services</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>blog</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}>contact</ListItem>
                        <ListItem display={'inline-block'} p={'40px 15px'}><Search2Icon/></ListItem>
                    </List>
                </Box>
            </Flex>
        </Box>
    )
}

export default HeaderComponent;