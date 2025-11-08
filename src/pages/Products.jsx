import { useEffect, useState } from "react";
import {useNavigate} from 'react-router'
import useAuth from "../hooks/useAuth";
import useAxiosProtect from "../hooks/useAxiosProtect";

const Products = () => {
  const navigate = useNavigate()
  const axiosProtect = useAxiosProtect();
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosProtect.get("/products").then((data) => {
      setData(data.data);
    });
  }, [user, axiosProtect]);

  const handelDelete = (id) => {
    axiosProtect
      .delete(`/products/${id}`, {
        method: "DELETE",
      })
      .then(() => {
        const filtered = data.filter((product) => product._id !== id);
        setData(filtered);
        alert("Deleted successfully");
      });
  };

  return (
    <div>
      <h2>Products Page</h2>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {data.map((product) => {
          return (
            <div key={product._id}>
              <div className="card bg-base-100 hover:scale-105 transition-all shadow-sm h-full">
                <figure>
                  <img src={product.product_img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.product_title}</h2>
                  <div className="badge badge-secondary">
                    {product.condition}
                  </div>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <div onClick={() => navigate(`/product-details/${product._id}`)} className="badge badge-outline cursor-pointer">View Details</div>
                    <div
                      onClick={() => handelDelete(product._id)}
                      className="badge badge-outline cursor-pointer"
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
