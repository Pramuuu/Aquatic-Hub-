
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  MapPin, 
  Ruler, 
  DollarSign, 
  Calendar 
} from 'lucide-react';
import { sampleSpecies } from '@/lib/data';

const Species = () => {
  const { id } = useParams<{ id: string }>();
  const species = sampleSpecies.find(species => species.id === id);
  
  if (!species) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-ocean-800 mb-4">Species Not Found</h2>
            <p className="mb-6">The species you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { 
    name, 
    scientificName, 
    habitat, 
    size, 
    price, 
    season, 
    availability, 
    image, 
    description, 
    tags 
  } = species;

  const habitatColors: Record<string, string> = {
    ocean: 'bg-ocean-100 text-ocean-800',
    pond: 'bg-teal-100 text-teal-800',
    river: 'bg-blue-100 text-blue-800',
    lake: 'bg-cyan-100 text-cyan-800',
  };

  const availabilityColors: Record<string, string> = {
    high: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/" className="inline-flex items-center text-ocean-600 hover:text-ocean-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all species
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge className={`${habitatColors[habitat]}`}>
                {habitat.charAt(0).toUpperCase() + habitat.slice(1)}
              </Badge>
              <Badge className={`${availabilityColors[availability]}`}>
                {availability.charAt(0).toUpperCase() + availability.slice(1)} Availability
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-ocean-900 dark:text-ocean-100 mb-2">{name}</h1>
            <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-6">{scientificName}</p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">{description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-ocean-600 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Habitat: {habitat}</span>
              </div>
              <div className="flex items-center">
                <Ruler className="h-5 w-5 text-ocean-600 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  Size: {size.min} - {size.max} {size.unit}
                </span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-ocean-600 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  {price.value > 0 ? `${price.value} ${price.currency}/kg` : 'Not for sale'}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-ocean-600 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  Season: {season.join(', ')}
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2 text-ocean-800 dark:text-ocean-200">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-ocean-gradient">Run Prediction</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Species;
