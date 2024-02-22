import React from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarItemComponent = (props) => {
    const {items,listCar,defautMoney,setDefautMoney} = props;

    const handleAddToCart = (itemPrice) => {
        const remainBalance = defautMoney - itemPrice;

        if(defautMoney < itemPrice) {
            toast.warn('Vui lòng kiểm tra lại balance')
        } else {
            toast('Đã thêm vào giỏ hàng thành công')
        }
        
        if(defautMoney > 0){
            setDefautMoney(remainBalance)
        } else {
            setDefautMoney(0)
        };
        
    }

    return (
        <>
            <Box key={items.id}>
                <Box >
                    <Box h={'468px'} w={'306px'} bgColor={'white'}>
                        <Flex>
                            <Box w={'330px'} h={'468px'} className='itemCart'>
                                <Box position={'relative'} className='itemCart-image'>
                                    <Image src={items.imageCar} h={'306px'} w={306} className='image' />
                                    <Box position={'absolute'} left={'0'} top={'0'} className='itemCart-button'>
                                        <Button bgColor={'white'} p={'20px'} textColor={'red'} position={'absolute'} right={'30%'} top={'45%'} onClick={() => handleAddToCart(items.price)}>Add to cart</Button>
                                    </Box>
                                </Box>
                                <Box p={'25px'}>
                                    <Text fontSize={'20px'}>{items.nameCar}</Text>
                                    <Flex>
                                        <Text as={"del"} color={"red"} mr={'10px'}>$10000</Text>
                                        <Text>${items.price}</Text>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <ToastContainer />
        </>
    )
}

export default CarItemComponent;