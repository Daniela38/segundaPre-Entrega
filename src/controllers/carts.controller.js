import CartsService from '../services/carts.service.js';

const cartsService = new CartsService();

export const createCart = async(req, res) => {
    try {
        const newCart = await cartsService.createCart();
        res.status(201).send({ status: 1, msg: 'Cart successfully added', cartId: newCart._id });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}

export const getCart = async(req, res) => {
    try {
        const cartId = req.params.cartId;
        const cart = await cartsService.getCart(cartId);
        res.json({ status: 1, cart });
    } catch(error) {
        res.status(500).json({ status: 0, error: error.message });
    }
}

export const updateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const products = req.body.products;
        const cart = await cartsService.addToCart(cartId, products);
        res.status(201).send({ status: 1, msg: 'Cart successfully updated', cartProducts: cart.products });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}

export const addProductToCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const productId = req.params.productId;
        const cart = await cartsService.addToCart(cartId, productId);
        res.status(201).send({ status: 1, msg: 'Product successfully added to cart', cart });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}

export const removeProductFromCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const productId = req.params.productId;
        const cart = await cartsService.removeFromCart(cartId, productId);
        res.status(201).send({ status: 1, msg: 'Product successfully deleted from cart', cart });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}

const updateProductQuantity = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const productId = req.params.productId;
        const quantity = req.body.quantity;
        const cart = await cartsService.updateProductQuantity(cartId, productId, quantity);
        res.status(201).send({ status: 1, msg: 'Product successfully deleted from cart', cart });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}

const emptyCart = async (req, res) => {
    const cartId = req.params.cartId;
    try {
        const emptyCart = await cartsService.emptyCart(cartId);
        res.status(201).send({ status: 1, msg: 'Product successfully emptied', cart: emptyCart });
    } catch(error) {
        res.status(500).send({ status: 0, msg: error.message });
    }
}