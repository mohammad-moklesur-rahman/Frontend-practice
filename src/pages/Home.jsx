import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Home = () => {
  const axiosInstance = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/public").then((data) => {
      setData(data.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        {data.map((product) => {
          return (
            <div key={product._id}>
              <h2>{product.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
