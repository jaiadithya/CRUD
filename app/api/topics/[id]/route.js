import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB().then(async()=>{

        await Topic.findByIdAndUpdate(id, {title, description});
        return NextResponse.json ({ message: "Topic Updated"}, {status: 200 }); 

    }).catch(e=>console.log(e));
   
}

export async function GET(request,{params}) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, {status: 200});
}