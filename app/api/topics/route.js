import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB();
    // await Topic.create({title, description});
    const newTopic = new Topic({title,description});
    const save = await newTopic.save()
    console.log(save)
    return NextResponse.json({message:"Topic Created"}, {status: 201})
}

export async function GET (){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted"}, {status:200});
}