"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuSendHorizonal } from "react-icons/lu";

interface SearchBarProps {
  onSearch: (method: string, searchTerm: string) => void;
}

const httpMethods = [
  { name: "GET", color: "text-blue-500" },
  { name: "POST", color: "text-green-500" },
  { name: "PUT", color: "text-yellow-500" },
  { name: "PATCH", color: "text-orange-500" },
  { name: "DELETE", color: "text-red-500" },
];

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [method, setMethod] = useState("GET");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(method, searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="flex items-stretch bg-background rounded-full ">
        <Select value={method} onValueChange={setMethod}>
          <SelectTrigger className="w-[120px] rounded-l-full border-r-0  py-6">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            {httpMethods.map((m) => (
              <SelectItem
                key={m.name}
                value={m.name}
                className={`font-bold ${m.color}`}
              >
                {m.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex-grow relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            id="search"
            type="text"
            placeholder="Enter request URL"
            value={searchTerm}
            onChange={handleChange}
            className="w-full rounded-none border-l-0 border-r-0  py-6"
          />
        </div>
        <Button type="submit" size="icon" className="rounded-r-full py-6">
          <LuSendHorizonal className="h-4 w-3" />
        </Button>
      </div>
    </form>
  );
}
