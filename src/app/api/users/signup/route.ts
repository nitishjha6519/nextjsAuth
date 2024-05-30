import { connect } from "@/dbConfig.ts/dbConfig";

import UserModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;

    console.log("reqBody", reqBody);

    const user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists", status: 400 });
    }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User saved to database successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
