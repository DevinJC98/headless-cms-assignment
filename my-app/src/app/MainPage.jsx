"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function MainPage() {
  const [assignment, setAssignment] = useState([]);

  //I needed to add this second use state to get the image working.
  const [duck, setDuck] = useState([]);

  //Same goes for this const. when pulled from the api the img url did not contain the localhost part of the url.
  const urlforimg = "http://localhost:1337";

  useEffect(() => {
    //Here I am fetching the api and sending an error message if the fetch fails.
    async function getApi() {
      try {
        const api = await fetch(
          //The image wasn't loaded into the api by default so I needed to populate the database with mainimage.
          "http://localhost:1337/api/assignment?populate=mainimage"
        );
        const content = await api.json();
        setAssignment(content.data);
        //populating the database returned multiple attributes so i had to dig deeper to fetch the imgage url
        setDuck(content.data.mainimage);
        //failed fetch error message
      } catch (error) {
        console.error("Something Went Wrong", error);
      }
    }
    getApi();
  }, []);

  //I used concatination to merge the local host with the image url
  return (
    <main>
      <img src={urlforimg + duck.url} alt="The Duck" width="500" height="500" />
      <div id="textHolder">
        <h1>{assignment.headingtext}</h1>
        <p>{assignment.bodytext}</p>
      </div>
    </main>
  );
}
