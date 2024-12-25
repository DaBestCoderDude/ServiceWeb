import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FilterBarProps {
  onIndustryChange?: (value: string) => void;
  onServiceTypeChange?: (value: string) => void;
  onSearchChange?: (value: string) => void;
}

const industries = [
  "Construction",
  "Technology",
  "Design",
  "Marketing",
  "Consulting",
  "Other",
];

const serviceTypes = [
  "One-time Project",
  "Ongoing Work",
  "Consultation",
  "Installation",
  "Maintenance",
];

const FilterBar = ({
  onIndustryChange = () => {},
  onServiceTypeChange = () => {},
  onSearchChange = () => {},
}: FilterBarProps) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 p-4 flex items-center gap-4 shadow-sm">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Search jobs..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <Select onValueChange={onIndustryChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem key={industry} value={industry.toLowerCase()}>
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={onServiceTypeChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Service Type" />
        </SelectTrigger>
        <SelectContent>
          {serviceTypes.map((type) => (
            <SelectItem key={type} value={type.toLowerCase()}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterBar;
