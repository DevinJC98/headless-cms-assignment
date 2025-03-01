"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MainPage() {
  const [assignment, setAssignment] = useState([]);
  const [duck, setDuck] = useState([]);
  const urlforimg = "http://localhost:1337";

  useEffect(() => {
    async function getApi() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/assignment?populate=mainimage"
        );
        const content = await res.json();
        setAssignment(content.data);
        setDuck(content.data.mainimage);
      } catch (err) {
        console.error("Something Went Wrong", err);
      }
    }
    getApi();
  }, []);

  return (
    <main>
      <img src={urlforimg + duck.url} alt="The Duck" width="500" height="500" />
      <h1>{assignment.headingtext}</h1>
      <p>{assignment.bodytext}</p>
    </main>
  );
}
