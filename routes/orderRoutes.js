const express = require('express')
const {
    orderProducts,
    getOrderById,
    getUserOrders,
    getAllUsersOrders,
    deleteOrderByAdmin,
    getOrderSummery
} = require('../controllers/orderController')
const protect = require('../middleware/authMiddleware')
const isAdmin = require('../middleware/adminMiddleware')
const orderRouter = express.Router()

orderRouter.post('/', protect, orderProducts)
orderRouter.get('/admin', protect, isAdmin, getAllUsersOrders)
orderRouter.get('/summery', protect, isAdmin, getOrderSummery)
orderRouter.delete('/admin/:orderId', protect, isAdmin, deleteOrderByAdmin)
orderRouter.get('/me', protect, getUserOrders)
orderRouter.get('/:id', protect, getOrderById)
module.exports = orderRouter