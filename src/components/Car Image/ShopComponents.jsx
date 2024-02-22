import { Box, Flex, Text, Input, IconButton, useDisclosure,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel,ModalFooter } from '@chakra-ui/react';
import React, { useState, current } from 'react';
import benz from './Car Image/car-benz.jpeg';
import bmw from './Car Image/car-bmw.jpeg';
import lexus from './Car Image/car-lexus.jpeg';
import CarItemComponent from './CarItemComponent';
import { Search2Icon } from '@chakra-ui/icons';

const infoDefaut = {
    id: 1,
    nameCar: "Xe Benz",
    imageCar: benz,
    price: "50000",
};

const listCarDefaut = [
    {
        id: 1,
        nameCar: "Xe Benz",
        imageCar: benz,
        price: "50000",
        isLiked: false
    },
    {
        id: 2,
        nameCar: "Xe Bwm",
        imageCar: bmw,
        price: "100000",
        isLiked: false
    },
    {
        id: 3,
        nameCar: "Xe Lexus",
        imageCar: lexus,
        price: "20000",
        isLiked: false
    },
];

const ShopComponents = () => {
    const [listCar, setListCar] = useState(listCarDefaut);
    const [inputNameCar, setInputNameCar] = useState("");
    const [defautMoney, setDefautMoney] = useState(200000);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [inputAddNameCar,setInputAddNameCar] = useState('');
    const [inputAddImageCar,setInputAddImageCar] = useState('');
    const [inputAddPriceCar,setInputAddPriceCar] = useState('');

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChangeInput = (value) => {
        const convertValue = value.toLowerCase().replace(/\s+/g, '');
        setInputNameCar(convertValue);
    }

    const handleInputAddNameCar = (value) => {
        setInputAddNameCar(value)
    }

    const handleInputAddImageCar = (value) => {
        setInputAddImageCar(value)
    }

    const handleInputAddPriceCar = (value) => {
        setInputAddPriceCar(value)
    }

    const handleSearchCar = (listCar, nameCar) => {
        const newListCar = listCar.filter((item) => {
            const lowerCaseCarItem = item.nameCar.toLowerCase().replace(/\s+/g, '');
            return lowerCaseCarItem.includes(nameCar);
        });
        if (newListCar.length > 0) {
            setListCar(newListCar);
        } else {
            setListCar(listCarDefaut);
        }

    }

    const handleAddNewCar = (name,image,price) => {
        const newId = listCarDefaut.length +1;
        const newCar = {
            id: newId,
            nameCar: name,
            imageCar: image,
            price: price,
            isLiked: false
        };

        setListCar(current => [...current, newCar]);

        
    }


    return (
        <>
            <Box bgColor={'#f9f9f8'}>
                <Box width={'1320px'} m={'0 auto'} p={'100px 5px'}>
                    <Box>
                        <Text mb={'10px'} fontSize={'22px'}>Shop List</Text>
                        <Text mb={'16px'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Text>
                    </Box>
                    <Box>
                        <Text fontSize={'30px'} textColor={'black'}>Your Balance : ${defautMoney}</Text>
                    </Box>
                    <Input placeholder='Nhập tên xe cần tìm'
                        w={300} mr={1} mb={'20px'}
                        onChange={(e) => handleChangeInput(e.target.value)}
                        onKeyUp={() => {
                            if (inputNameCar) {
                                handleSearchCar(listCar, inputNameCar);
                            } else {
                                setListCar(listCarDefaut);
                            }
                        }}
                    />
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<Search2Icon />}
                        onClick={() => handleSearchCar(listCar, inputNameCar)}
                    />
                    <Flex gap={'30px'}>
                        {/* Card Item */}

                        {listCar.map((car) => {
                            return (
                                <CarItemComponent
                                    items={car}
                                    key={car.id}
                                    listCar={listCar}
                                    setListCar={setListCar}
                                    defautMoney={defautMoney}
                                    setDefautMoney={setDefautMoney}
                                />
                            )
                        })}
                    </Flex>
                </Box>
                <Box m={'0 auto'}>
                    <Button onClick={onOpen}>Add New Car</Button>
                    <Button ml={4} ref={finalRef}>
                        I'll receive focus on close
                    </Button>

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Add new car to your shop</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Car name</FormLabel>
                                    <Input ref={initialRef} placeholder='car name' 
                                    onChange={(e) => handleInputAddNameCar(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Car image</FormLabel>
                                    <Input placeholder='car image' 
                                    onChange={(e) => handleInputAddImageCar(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Car Price</FormLabel>
                                    <Input ref={initialRef} placeholder='car price' 
                                    onChange={(e) => handleInputAddPriceCar(e.target.value)}
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={() => handleAddNewCar(inputAddNameCar,inputAddImageCar,inputAddPriceCar)}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </>
    )
}


export default ShopComponents;