import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  User,
  BookText,
  Users,
  Calendar,
  Image,
  Search,
  FileText,
} from "lucide-react";
import ExplainLikeChild from "@/components/features/ExplainLikeChild";
import LocalLanguage from "@/components/features/LocalLanguage";
import HandwritingRecognition from "@/components/features/HandwritingRecognition";
import ExamScanner from "@/components/features/ExamScanner";
import ChatWithPDF from "@/components/features/ChatWithPDF";
import ProgressDashboard from "@/components/features/ProgressDashboard";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: "explain-child",
      title: "Explain Like I'm Five",
      description: "Simplify complex concepts with visuals and easy language",
      icon: BookText,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      id: "local-language",
      title: "Local Language Support",
      description: "Learn in your preferred regional language",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      id: "handwriting",
      title: "Handwriting Recognition",
      description: "Convert handwritten notes to digital format",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      id: "exam-scanner",
      title: "Exam Prep Scanner",
      description: "Scan questions and get learning resources",
      icon: Image,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      id: "chat-pdf",
      title: "Chat with PDF/Video",
      description: "Interactive learning with AI assistance",
      icon: Search,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
    },
    {
      id: "progress",
      title: "Progress Dashboard",
      description: "Track your learning journey and achievements",
      icon: Calendar,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
    },
  ];

  const renderFeature = () => {
    switch (activeFeature) {
      case "explain-child":
        return <ExplainLikeChild onBack={() => setActiveFeature(null)} />;
      case "local-language":
        return <LocalLanguage onBack={() => setActiveFeature(null)} />;
      case "handwriting":
        return <HandwritingRecognition onBack={() => setActiveFeature(null)} />;
      case "exam-scanner":
        return <ExamScanner onBack={() => setActiveFeature(null)} />;
      case "chat-pdf":
        return <ChatWithPDF onBack={() => setActiveFeature(null)} />;
      case "progress":
        return <ProgressDashboard onBack={() => setActiveFeature(null)} />;
      default:
        return null;
    }
  };

  if (activeFeature) {
    return renderFeature();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SmartLearn
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5" />
                <span>Welcome, Student!</span>
              </div>
              <Button
                variant="outline"
                onClick={onLogout}
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Learning Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Choose a tool to enhance your learning experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${feature.bgColor} hover:scale-105 transform`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-500 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card onClick from firing
                      if (feature.id === "chat-pdf") {
                        window.open("http://localhost:8501", "_blank");
                      } else {
                        setActiveFeature(feature.id);
                      }
                    }}
                    className={`bg-gradient-to-r ${feature.color} hover:shadow-lg text-white px-6 py-2 rounded-lg transition-all duration-200`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600">Learning Sessions</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
              <div className="text-gray-600">Progress Score</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-gray-600">Concepts Learned</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
