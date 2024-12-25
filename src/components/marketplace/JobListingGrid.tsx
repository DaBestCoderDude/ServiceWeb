import React from "react";
import FilterBar from "./FilterBar";
import JobCard from "./JobCard";

interface JobListingGridProps {
  jobs?: Array<{
    id: string;
    title: string;
    description: string;
    budget: {
      min: number;
      max: number;
    };
    deadline: string;
    category: string;
    bidCount: number;
    status: "open" | "in-progress" | "completed";
  }>;
  onBidClick?: (jobId: string) => void;
  onFilterChange?: (filters: {
    industry?: string;
    serviceType?: string;
    search?: string;
  }) => void;
}

const defaultJobs = [
  {
    id: "1",
    title: "Website Redesign Project",
    description:
      "Looking for an experienced web developer to redesign our company website.",
    budget: { min: 1000, max: 5000 },
    deadline: "2024-03-01",
    category: "Web Development",
    bidCount: 5,
    status: "open" as const,
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Need a skilled developer to create an iOS and Android app.",
    budget: { min: 5000, max: 15000 },
    deadline: "2024-04-15",
    category: "Mobile Development",
    bidCount: 3,
    status: "open" as const,
  },
  {
    id: "3",
    title: "Logo Design Project",
    description: "Seeking a creative designer for company rebrand.",
    budget: { min: 500, max: 2000 },
    deadline: "2024-02-28",
    category: "Graphic Design",
    bidCount: 8,
    status: "in-progress" as const,
  },
];

const JobListingGrid = ({
  jobs = defaultJobs,
  onBidClick = () => {},
  onFilterChange = () => {},
}: JobListingGridProps) => {
  const handleIndustryChange = (value: string) => {
    onFilterChange({ industry: value });
  };

  const handleServiceTypeChange = (value: string) => {
    onFilterChange({ serviceType: value });
  };

  const handleSearchChange = (value: string) => {
    onFilterChange({ search: value });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <FilterBar
        onIndustryChange={handleIndustryChange}
        onServiceTypeChange={handleServiceTypeChange}
        onSearchChange={handleSearchChange}
      />

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              description={job.description}
              budget={job.budget}
              deadline={job.deadline}
              category={job.category}
              bidCount={job.bidCount}
              status={job.status}
              onBidClick={() => onBidClick(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingGrid;
