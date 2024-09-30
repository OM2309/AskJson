"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/app/utils/apiService";
import GridLines from "react-gridlines";

type Props = {
  params: { endpoint: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["endpoint", params.endpoint],
    queryFn: () => getRequest(`/${params.endpoint}`),
  });

  return <div className="flex h-screen ">Hello</div>;
};

export default Page;
