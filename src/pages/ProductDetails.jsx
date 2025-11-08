import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useAxiosProtect from "../hooks/useAxiosProtect";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const axiosProtect = useAxiosProtect()
  const { id } = useParams();

  useEffect(() => {
    axiosProtect.get(`/products/${id}`).then((data) => {
      setData(data.data);
    });
  }, [id, axiosProtect]);

  return (
    <div>
      <h2>Product Details Page</h2>
      <div className="mt-8">
        {data.map((product) => {
          return (
            <div key={product._id}>
              <div>
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
                    <div className="badge badge-outline cursor-pointer">
                      Add to Cart
                    </div>
                    <div className="badge badge-outline cursor-pointer">
                      Edit
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

export default ProductDetails;
