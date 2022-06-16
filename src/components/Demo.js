import React from "react";

function Demo() {
   const comment = {
      date: new Date(),
      text: "welcome to react component",
      author: { name: "cuongle", avatarUrl: "images/logo.jpg" },
   };
   return (
      <div>
         <h2>{comment.text}</h2>
         <h3>{comment.date}</h3>
         <h4>{comment.author.name}</h4>
      </div>
   );
}
export default Demo;

// export default DemoComponent;
