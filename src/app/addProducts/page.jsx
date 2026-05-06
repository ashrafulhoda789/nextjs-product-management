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
import { IoMdAdd } from "react-icons/io";

const AddNewProducts = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newProduct = Object.fromEntries(formData.entries());

        console.log(newProduct);
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
                            name="name"
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