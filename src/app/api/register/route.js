import { NextResponse } from "next/server";

export async function  POST(req){
    try{
  const {name, email, password} =await req.json();
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  return new Response("Data received", {
    status: 200,
    headers: {
        "Content-Type": "text/plain",
        },
        });
  return NextResponse.json({message: "User registered"}, {status: 201});
    }catch(error){
        return NextResponse.json({message:"An error occurred"}, {status: 500});
    }
}