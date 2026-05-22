"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config/config";

export default function TemplatePage() {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await axios.get(
          `${config.api.baseUrl}${config.api.endpoints.templates}`
        );

        setTemplate(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTemplate();
  }, []);

  return (
    <div>
      <h1>Template</h1>

      {template && (
        <div>
          <h2>{template.title}</h2>
          <p>₹ {template.indprice}</p>
        </div>
      )}
    </div>
  );
}