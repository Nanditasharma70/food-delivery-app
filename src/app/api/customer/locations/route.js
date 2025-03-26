import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../../../lib/db"; // Check path
import RestaurantModel from "../../../../lib/restaurantsModel";  // Check path

export async function GET() {
    try {
        // Ensure MongoDB is connected
        if (mongoose.connection.readyState !== 1) {  // 1 indicates 'connected' state
            await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
        }

        // Fetch all restaurants' cities
        let result = await RestaurantModel.find({}, "city");

        // Capitalize first letter of city names and remove duplicates
        let cities = [...new Set(result.map((item) => item?.city?.charAt(0).toUpperCase() + item?.city?.slice(1)))];

        return NextResponse.json({ success: true, result: cities });
    } catch (error) {
        console.error("Error fetching locations:", error);  // Improved error logging
        return NextResponse.json({ success: false, message: "Server error. Please try again later." }, { status: 500 });
    }
}
