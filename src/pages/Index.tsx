
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SpeciesList from '@/components/SpeciesList';
import Footer from '@/components/Footer';
import { sampleSpecies } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { 
  Database, 
  Upload, 
  Search, 
  ChartBar, 
  ArrowRight 
} from 'lucide-react';

const Index = () => {
  const oceanSpecies = sampleSpecies.filter(species => species.habitat === 'ocean');
  const freshwaterSpecies = sampleSpecies.filter(species => species.habitat !== 'ocean');

  const features = [
    {
      icon: <Database className="h-8 w-8 text-ocean-600" />,
      title: "Species Database",
      description: "Comprehensive database of aquatic species with detailed information and classifications."
    },
    {
      icon: <Upload className="h-8 w-8 text-ocean-600" />,
      title: "Image Recognition",
      description: "Upload images to identify species using our advanced AI prediction models."
    },
    {
      icon: <Search className="h-8 w-8 text-ocean-600" />,
      title: "Research Tools",
      description: "Tools for researchers to collect, analyze, and contribute to species data."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-ocean-600" />,
      title: "Analytics Dashboard",
      description: "Interactive dashboards showing trends, seasonal availability, and price data."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-900 dark:text-ocean-100">Platform Features</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform provides powerful tools to explore, identify, and analyze aquatic species data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-ocean-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-ocean-800 dark:text-ocean-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Species Lists */}
      <SpeciesList title="Ocean Species" species={oceanSpecies} />
      <SpeciesList title="Freshwater Species" species={freshwaterSpecies} />
      
      {/* CTA Section */}
      <section className="relative py-20 bg-ocean-gradient text-white">
        <div className="absolute inset-0 bg-wave-pattern bg-no-repeat bg-bottom opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Aquatic Species?</h2>
            <p className="text-xl mb-8 text-ocean-50">
              Join our platform to access powerful prediction tools, comprehensive data, 
              and contribute to our growing community of researchers.
            </p>
            <Button className="bg-white text-ocean-700 hover:bg-ocean-50 text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
