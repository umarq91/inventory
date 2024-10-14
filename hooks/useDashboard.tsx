"use client";
import { useState } from "react";

export const useDashboard = () => {
  const [activeLink, setActiveLink] = useState('Changed');

  
  return { activeLink, setActiveLink };
};
