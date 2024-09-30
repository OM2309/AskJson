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
import { useToast } from "@/hooks/use-toast";
import { LucideSendHorizontal } from "lucide-react";

interface SearchBarProps {
  onSearch: (method: string, searchTerm: string) => void;
}

const httpMethods = [
  { name: "GET", color: "text-blue-500" },
  // Uncomment other methods as needed
  // { name: "POST", color: "text-green-500" },
  // { name: "PUT", color: "text-yellow-500" },
  // { name: "PATCH", color: "text-orange-500" },
  // { name: "DELETE", color: "text-red-500" },
];

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [method, setMethod] = useState("GET");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check for empty or whitespace-only search terms
    if (!searchTerm.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid endpoint",
        variant: "destructive",
      });
      return;
    }

    // Execute the search
    onSearch(method, searchTerm);
    setSearchTerm(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <div className="flex items-stretch bg-background rounded-full">
        {/* Select Method */}
        <Select value={method} onValueChange={setMethod}>
          <SelectTrigger className="w-[120px] rounded-l-full border-r-0 py-6">
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

        {/* Input Field */}
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
            className="w-full rounded-none border-l-0 border-r-0 py-6"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="icon" className="rounded-r-full py-6">
          <LucideSendHorizontal className="h-4 w-4" />{" "}
          {/* Corrected icon size */}
        </Button>
      </div>
    </form>
  );
}
