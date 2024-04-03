'use client'
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const TopicsList = async () => {
const [topics,setTopics ] = useState()

  const resullt= await getTopics();
  console.log("resultttt",resullt);
  return (
    <>
      {/* {topics?.map((t) => (
        <div
          key={t._id}
          className="p-4 flex justify-between my-4 border border-slate-300 items-start"
        >
          <div>
            <h2 className="font-bold text-xl">{t.title}</h2>
            <p>{t.description}</p>
          </div>

          <div className="flex gap-6">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <BiSolidEdit size={24} />
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default TopicsList;
