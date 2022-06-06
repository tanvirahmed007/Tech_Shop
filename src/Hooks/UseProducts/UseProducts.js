import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);
  return [products];
  
}

export default UseProducts;