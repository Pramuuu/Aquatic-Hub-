
import React from 'react';
import SpeciesCard from './SpeciesCard';
import { Species } from '@/lib/data';

interface SpeciesListProps {
  title: string;
  species: Species[];
}

const SpeciesList: React.FC<SpeciesListProps> = ({ title, species }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ocean-800 dark:text-ocean-300 mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {species.map((item) => (
            <SpeciesCard key={item.id} species={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesList;
