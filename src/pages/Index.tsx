
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, DollarSign } from "lucide-react";

const Index = () => {
  const internships = [
    {
      title: "Web Development Internship Program",
      duration: "1 month/2 months",
      location: "Virtual",
      stipend: "-",
      startDate: "05/11/2023",
      id: "web-dev"
    },
    {
      title: "App Development Internship Program", 
      duration: "1 month/2 months",
      location: "Virtual",
      stipend: "-",
      startDate: "05/11/2023",
      id: "app-dev"
    },
    {
      title: "Python Programming Internship Program",
      duration: "1 month/2 months", 
      location: "Virtual",
      stipend: "-",
      startDate: "05/11/2023",
      id: "python"
    },
    {
      title: "Java Programming Internship Program",
      duration: "1 month/2 months",
      location: "Virtual", 
      stipend: "-",
      startDate: "05/11/2023",
      id: "java"
    }
  ];

  const handleViewDetails = (id: string) => {
    console.log(`Viewing details for internship: ${id}`);
    // This would typically navigate to a details page or open a modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Internships
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Discover amazing internship opportunities to kickstart your career in technology
          </p>
        </div>
      </div>

      {/* Internship Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card 
              key={internship.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {internship.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">
                      <span className="font-medium">Duration:</span> {internship.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="text-sm">
                      <span className="font-medium">Location:</span> {internship.location}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <DollarSign className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">
                      <span className="font-medium">Stipend:</span> {internship.stipend}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <CalendarDays className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">
                      <span className="font-medium">Start date:</span> {internship.startDate}
                    </span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={() => handleViewDetails(internship.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Index;
