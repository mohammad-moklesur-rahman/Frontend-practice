import { useContext, useState } from "react";
import { AuthContext } from "../context/Firebase/AuthContext";

const CreateProduct = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState(null);
  const [condition, setCondition] = useState("Brand New");
  const [description, setDescription] = useState("");
  const handelCreateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.product_title.value;
    const min_price = form.min_price.value;
    const max_price = form.max_price.value;
    const usage_time = form.usage_time.value;
    const product_img = form.product_img.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const seller_contact = form.seller_contact.value;
    const seller_img = form.seller_img.value;
    const location = form.location.value;

    const product = {
      product_title,
      category,
      min_price,
      max_price,
      condition,
      usage_time,
      product_img,
      seller_name,
      seller_email,
      seller_contact,
      seller_img,
      location,
      description,
    };
    console.log(user);
    // * Product api
    fetch("https://backend-practice-tau.vercel.app/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product created successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="bg-base-200 min-h-screen">
      <h2 className="text-2xl font-bold text-center">Create a Product</h2>
      <div className="bg-base-100 rounded-2xl w-3xl mx-auto my-4 p-4">
        <form onSubmit={handelCreateProduct}>
          <div className="flex justify-between">
            <div>
              <h2>Title</h2>
              <input
                type="text"
                required
                name="product_title"
                className="input w-85"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
              />
            </div>
            <div>
              <h2>Category</h2>
              <select
                onChange={(e) => setCategory(e.target.value)}
                defaultValue="Select a Category"
                className="select w-85"
              >
                <option disabled>Select a Category</option>
                <option name="Electronics">Electronics</option>
                <option>Vehicle</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2>Min Price You want to Sale ($)</h2>
              <input
                type="text"
                required
                name="min_price"
                className="input w-85"
                placeholder="e.g. 18.5"
              />
            </div>
            <div>
              <h2>Max Price You want to Sale ($)</h2>
              <input
                type="text"
                required
                name="max_price"
                className="input w-85"
                placeholder="Optional (default = Min Price)"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2>Product Condition</h2>
              <label className="label cursor-pointer mr-4">
                <input
                  type="radio"
                  value="Brand New"
                  defaultChecked={condition === "Brand New"}
                  onChange={(e) => setCondition(e.target.value)}
                  name="radio-6"
                  className="radio radio-accent"
                />
                <span>Brand New</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  value="Used"
                  checked={condition === "Used"}
                  onChange={(e) => setCondition(e.target.value)}
                  name="radio-6"
                  className="radio radio-accent"
                />
                <span>Used</span>
              </label>
            </div>
            <div>
              <h2>Product Usage time</h2>
              <input
                type="text"
                required
                name="usage_time"
                className="input w-85"
                placeholder="e.g. 1 year 3 month"
              />
            </div>
          </div>

          <div>
            <h2>Your Product Image URL</h2>
            <input
              type="text"
              required
              name="product_img"
              className="input w-full"
              placeholder="https://..."
            />
          </div>

          <div className="flex justify-between">
            <div>
              <h2>Seller Name</h2>
              <input
                type="text"
                required
                name="seller_name"
                className="input w-85"
                placeholder="e.g. Artisan Roasters"
              />
            </div>
            <div>
              <h2>Seller Email</h2>
              <input
                type="text"
                required
                name="seller_email"
                className="input w-85"
                placeholder="leli31955@nrlord.com"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2>Seller Contact</h2>
              <input
                type="text"
                required
                name="seller_contact"
                className="input w-85"
                placeholder="e.g. +1-555-1234"
              />
            </div>
            <div>
              <h2>Seller Image URL</h2>
              <input
                type="text"
                required
                name="seller_img"
                className="input w-85"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <h2>Location</h2>
            <input
              type="text"
              required
              name="location"
              className="input w-full"
              placeholder="City, Country"
            />
          </div>

          <div>
            <h2>Simple Description about your Product</h2>
            <textarea
              className="textarea w-full"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
            ></textarea>
          </div>
          <button type="submit" className="btn w-full bg-pink-500">
            Create a Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
