import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../../../../lib/db";
import Order from "../../../../../lib/ordersModel";
import Restaurant from "../../../../../lib/restaurantsModel"; 

export async function GET(request, content) {
    const id = content.params.id;
    let success = false;

    try {
        await mongoose.connect(connectionStr);
        
        let orders = await Order.find({ deliveryBoy_id: id });

        if (orders.length > 0) {
            let restoData = await Promise.all(
                orders.map(async (order) => {
                    let restoInfo = {};
                    let restaurant = await Restaurant.findOne({ _id: order.resto_id });

                    restoInfo.data = restaurant || {};
                    restoInfo.amount = order.amount;
                    restoInfo.status = order.status;

                    return restoInfo;
                })
            );

            return NextResponse.json({ result: restoData, success: true });
        } else {
            return NextResponse.json({ result: [], success: false, message: "No orders found." });
        }
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" });
    }
}
