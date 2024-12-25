import React from "react";
import JobListingGrid from "./marketplace/JobListingGrid";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface HomeProps {
  onCreateJob?: () => void;
  onBidSubmit?: (jobId: string) => void;
  onFilterChange?: (filters: {
    industry?: string;
    serviceType?: string;
    search?: string;
  }) => void;
}

const Home = ({
  onCreateJob = () => console.log("Create job clicked"),
  onBidSubmit = () => console.log("Bid submitted"),
  onFilterChange = () => console.log("Filters changed"),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Service Marketplace
            </h1>
            <Button
              onClick={onCreateJob}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <JobListingGrid
          onBidClick={onBidSubmit}
          onFilterChange={onFilterChange}
        />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2024 Service Marketplace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
