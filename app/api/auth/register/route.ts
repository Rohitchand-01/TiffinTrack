// /app/api/auth/register/route.ts
import User from '../../../models/User';
import Provider from '../../../models/Provider';
import connectToDB from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role, ...otherFields } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json({ message: 'All required fields must be provided' }, { status: 400 });
    }

    await connectToDB();

    const Model = role === 'provider' ? Provider : User;

    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: `${role} already exists with this email` }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const userData = {
      name,
      email,
      password: hashedPassword,
      ...otherFields
    };

    const newUser = await Model.create(userData);

    return NextResponse.json({ 
      message: `${role} registered successfully`, 
      user: { id: newUser._id, name: newUser.name, email: newUser.email }
    }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Something went wrong during registration' }, { status: 500 });
  }
}
