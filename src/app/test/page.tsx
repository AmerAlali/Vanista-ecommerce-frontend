"use client";

import axios from "axios";
import { useState } from "react";

export default function TestPage() {
  const [imageToUpload, setImageToUpload] = useState<HTMLInputElement | null>(
    null
  );
  const handleFileSelected = async (e: any) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    const ob = {
      title: "test",
      description: "testttt",
      price: 123456,
      variants: [
        {
          size: ["XS"],
          color: "black",
          quantity: 5,
        },
      ],
    };
    formData.append("image", files[0] as any);
    formData.append("title", ob.title);
    formData.append("description", ob.description);
    formData.append("price", JSON.stringify(ob.price));
    formData.append("variants", JSON.stringify(ob.variants));
    const { data } = await axios.post(
      "http://localhost:8080/api/product/create",
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data);
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelected} />
    </div>
  );
}
