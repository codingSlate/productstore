const FakeStoreAPI={
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products?limit=5')
        const result = await res.json()
        return result
    },
    fetchProductById: async (id) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await res.json()
        return result
    },

    fetchProductBySearchQuery: async (query) => {
        const res = await fetch('https://fakestoreapi.com/products')
        const result = await res.json()
        return result.filter(product=>product.title.toLowerCase().includes(query))
    }
}

export {FakeStoreAPI}