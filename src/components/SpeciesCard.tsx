
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Species } from '@/lib/data';

interface SpeciesCardProps {
  species: Species;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species }) => {
  const { id, name, scientificName, habitat, image, tags } = species;

  const habitatColors: Record<string, string> = {
    ocean: 'bg-ocean-100 text-ocean-800',
    pond: 'bg-teal-100 text-teal-800',
    river: 'bg-blue-100 text-blue-800',
    lake: 'bg-cyan-100 text-cyan-800',
  };

  return (
    <Link to={`/species/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="py-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-ocean-900 dark:text-ocean-100">{name}</h3>
              <p className="text-sm text-gray-500 italic">{scientificName}</p>
            </div>
            <Badge className={`${habitatColors[habitat]}`}>
              {habitat.charAt(0).toUpperCase() + habitat.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="py-0">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-gray-600 dark:text-gray-300 pt-3 pb-4">
          <span>Click to view details</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SpeciesCard;
