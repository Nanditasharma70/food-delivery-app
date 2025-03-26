import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../../lib/db";  // Path to your db connection
import RestaurantModel from "../../../lib/restaurantsModel";  // Default import

export async function GET(request) {
    try {
        let queryParams = request.nextUrl.searchParams;
        let filter = {};

        // Handle query params for location or restaurant
        if (queryParams.get("location")) {
            let city = queryParams.get("location");
            filter = { city: { $regex: new RegExp(city, 'i') } };
        } else if (queryParams.get("restaurant")) {
            let name = queryParams.get("restaurant");
            filter = { name: { $regex: new RegExp(name, 'i') } };
        }

        // Connect to MongoDB if not already connected
        if (mongoose.connection.readyState !== 1) {  // 1 indicates 'connected' state
            await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
        }

        // Query the database
        let result = await RestaurantModel.find(filter);

        // Return the filtered results
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error("Error fetching restaurants:", error);  // More specific error logging
        return NextResponse.json({ success: false, message: "Server error. Please try again later." }, { status: 500 });
    }
}
