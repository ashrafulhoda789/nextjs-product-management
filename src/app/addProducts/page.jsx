"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";

const AddNewProducts = () => {

    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newProduct = Object.fromEntries(formData.entries());

        console.log(newProduct);

        const req = await fetch('http://localhost:8006/products', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })

        const res = await req.json();

        if(res.success){
            toast.success('Product added successfully');
            redirect('/products')
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-300">
            <Form className="w-full max-w-96 border p-8 rounded-2xl bg-white" onSubmit={onSubmit}>
                <Fieldset>
                    <Fieldset.Legend>Product</Fieldset.Legend>
                    <Description>Add A New Product</Description>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="product_name"
                            validate={(value) => {
                                if (value.length < 2) {
                                    return "Name must be at least 2 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter Product Name..." />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="model"
                            validate={(value) => {
                                if (value.length < 2) {
                                    return "Model must be at least 2 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Model</Label>
                            <Input placeholder="Enter Product Model..." />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="price"
                            
                        >
                            <Label>Price</Label>
                            <Input placeholder="Enter Product Price" />
                            <FieldError />
                        </TextField>
                       
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <IoMdAdd></IoMdAdd>
                            Add Product
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
};

export default AddNewProducts;