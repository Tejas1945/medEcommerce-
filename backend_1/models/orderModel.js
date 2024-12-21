import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    items: { type: [itemSchema], required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, required: true, default: 'Order Placed' },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, required: true, default: false },
    date: { type: Number, required: true }
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;