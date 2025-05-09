import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const App = () => {
//   const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        await client.getContentType("blog").then((entries) => {
          console.log(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAll();
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pt-8">
      {" "}
      <section className="p-4 border rounded ">
        <h3>Sobre mí</h3>
        <p>
          Hey! <strong> Soy Arón </strong>
        </p>
        <p>
          Desarrollador React y Java, entre otras tecnologías. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Adipisci accusantium sapiente
          alias. Nihil, ex velit beatae facere corrupti fugiat ipsa. In quis eos
          voluptatum blanditiis! Obcaecati aliquid quasi consectetur
          reprehenderit.
        </p>
        <div className="flex gap-4">
          {/* <Linkedin /> */}
          {/* <Github /> */}
        </div>
      </section>
      <section className="p-4 border rounded row-span-2">
        <h3>últimos posts</h3>
      </section>
      <section className="p-4 border rounded">
        {" "}
        <h3>proyectos</h3>
      </section>
    </div>
  );
};
