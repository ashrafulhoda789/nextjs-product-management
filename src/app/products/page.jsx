import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const ProductsPage = async () => {

    const res = await fetch('http://localhost:8006/products');
    const products = await res.json();

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='font-bold text-2xl'>Products: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
                {
                    products.map(product => (
                        <div key={product.id} className='border p-4 space-y-3'>

                            <h2 className='font-bold text-xl'>{product.product_name}</h2>
                            <hr />
                            <div className='flex justify-between'>
                                <h2 className='font-semibold text-lg'>Model: {product.model}</h2>
                                <p className='font-medium'>Price: {product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Link href={'/addProducts'}>
                <Button variant='outline'> <IoMdAddCircle /> Add Products</Button>
            </Link>
        </div>
    );
};

export default ProductsPage;