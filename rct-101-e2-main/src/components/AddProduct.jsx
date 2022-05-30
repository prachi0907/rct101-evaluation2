import React from "react";
import {useState} from "react";
import { Button,} from '@chakra-ui/react'
import {
  Modal,
  ModalBody, 
} from '@chakra-ui/react'

import { Radio, RadioGroup } from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const AddProduct = () => {
  const [text,setText] = useState("");
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(3)

  const handlechange = (e)=>{
    setText(e.target.value);
  }

  const getData =()=>{
    fetch (`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((d)=>d.json())
    .then((res)=>setData(res)
    )}

  const addData = ()=>{
    const payload = {
      title :text,
      status: false
    };
    fetch ("http://localhost:8080/products",{
      method:"POST",
      body:JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      },
    }).then(()=>{
      getData();
      setText("")
    })
  }
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add products</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" onchange={handlechange}/>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">pants</option>
            <option data-cy="add-product-category-pant">shirts</option>
            <option data-cy="add-product-category-jeans">tshirts</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">others</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"  onClick={addData}>submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
