import React, { useState } from "react";

function App() {
  const profiles = [
    {
      id: 0,
      name: "Abel Mbula",
      img: "/images/abel-profile.png",
      title: "Developpeur Full Stack en JS",
      company: "Freelance",
      description:
        "Andrew Coco has been in the online marketing industry since 2012. Past work experience covers many aspects of digital marketing but SEO is the foundation. Having spent time in-house at a start up doing social media, email, and search marketing, at small agencies doing SEO, at global agencies handling SEM (Paid Search), Andrew gained a wealth of knowledge in many aspects of digital marketing channels and how they relate to business goals. Recently, Andrew was brought in as the Ecommerce SEO Manager at GUESS?. Inc. where he was able to ..",
      tag: "js react js nodejs",
    },
    {
      id: 1,
      name: "Sarah Lifaefi",
      img: "/images/abel-profile.png",
      title: "Front-end Dev",
      company: "Kali Academy",
      description:
        "Remarquez bien que cette fonctionnalitÃ© ne fait pas partie de React : elle est fournie par des bibliothÃ¨ques tierces. React nâa pas dâopinion sur la maniÃ¨re dont les styles doivent Ãªtre dÃ©finis ; si vous avez un doute, une bonne maniÃ¨re de commencer consiste Ã  dÃ©finir vos styles dans des fichiers *.css sÃ©parÃ©s comme dâhabitude et Ã  y faire rÃ©fÃ©rence en utilisant",
      tag: "Angular Bootstrap",
    },
    {
      id: 2,
      name: "Ruth BOKOTA",
      img: "/images/abel-profile.png",
      title: "Full stack",
      company: "Infoset, Inc.",
      description: "lorem",
      tag: "python sql js django",
    },
  ];

  const handleSearch = event => console.log(event.target.value);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <hr />
      <Mentors list={profiles} />
    </div>
  );
}

const Search = props => {
  const [searchTerm, setSearchTerm] = useState();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for: <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

const Mentors = props =>
  props.list.map(mentor => (
    <div key={mentor.id}>
      <h1>
        {mentor.id}. {mentor.name}
      </h1>
      <ul>
        <li>Title: {mentor.title}</li>
        <li>Company: {mentor.company}</li>
        <li>Description: {mentor.description}</li>
      </ul>
    </div>
  ));

export default App;
