import React from "react";
import axios from "axios";
import Cards from "./Cards";

function Course() {


  
  const [allBooks,setAllBooks]= React.useState([]);
  React.useEffect(() => {
    const getBook = async () => {
      try {
        await axios.get("/api/book").then((res) => {
          
          setAllBooks(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="mt-16 container flex flex-wrap justify-center gap-5 py-5">
      {allBooks.map((item) => (
              <div key={item.id}>
                <Cards item={item} />
              </div>
            ))}
      </div>
    </>
  );
}

export default Course;
