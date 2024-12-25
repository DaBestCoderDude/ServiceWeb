import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Users } from "lucide-react";

interface JobCardProps {
  title?: string;
  description?: string;
  budget?: {
    min: number;
    max: number;
  };
  deadline?: string;
  category?: string;
  bidCount?: number;
  status?: "open" | "in-progress" | "completed";
  onBidClick?: () => void;
}

const JobCard = ({
  title = "Website Redesign Project",
  description = "Looking for an experienced web developer to redesign our company website using modern technologies and best practices.",
  budget = { min: 1000, max: 5000 },
  deadline = "2024-03-01",
  category = "Web Development",
  bidCount = 0,
  status = "open",
  onBidClick = () => console.log("Bid clicked"),
}: JobCardProps) => {
  const statusColors = {
    open: "bg-green-500",
    "in-progress": "bg-yellow-500",
    completed: "bg-gray-500",
  };

  return (
    <Card className="w-[380px] h-[320px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 mt-1">
              {category}
            </CardDescription>
          </div>
          <Badge
            variant="secondary"
            className={`${statusColors[status]} text-white`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              ${budget.min.toLocaleString()} - ${budget.max.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Due {new Date(deadline).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{bidCount} bids</span>
        </div>
        <Button
          onClick={onBidClick}
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Place Bid
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
