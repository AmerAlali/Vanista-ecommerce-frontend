"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

const BreedCrumb = () => {
  return (
    <Breadcrumbs size="lg" className="mb-[20px]">
      <BreadcrumbItem>Shop</BreadcrumbItem>
      <BreadcrumbItem>All</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreedCrumb;
