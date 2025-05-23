
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Image, Search, BookOpen } from 'lucide-react';

interface ExamScannerProps {
  onBack: () => void;
}

const ExamScanner = ({ onBack }: ExamScannerProps) => {
  const [scannedQuestion, setScannedQuestion] = useState('');
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      // Simulate question extraction and resource finding
      setTimeout(() => {
        setScannedQuestion("What is the derivative of f(x) = 3x² + 2x - 5?");
        setResources([
          {
            type: "Video Lesson",
            title: "Derivatives of Polynomial Functions",
            duration: "12:34",
            difficulty: "Intermediate",
            description: "Complete guide to finding derivatives of polynomial functions with examples"
          },
          {
            type: "Practice Set",
            title: "Derivative Rules Practice",
            questions: 25,
            difficulty: "Beginner",
            description: "Solve 25 problems on basic derivative rules"
          },
          {
            type: "Theory Notes",
            title: "Calculus Fundamentals",
            pages: 8,
            difficulty: "Intermediate",
            description: "Comprehensive notes covering derivative rules and applications"
          },
          {
            type: "Similar Questions",
            title: "Previous Year Papers",
            questions: 15,
            difficulty: "Advanced",
            description: "Similar derivative problems from past examinations"
          }
        ]);
        setLoading(false);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exam Prep Scanner</h1>
          <p className="text-lg text-gray-600">Scan questions and get instant learning resources</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="w-5 h-5 mr-2 text-orange-600" />
                Upload Question
              </CardTitle>
              <CardDescription>
                Take a photo or upload an image of your exam question
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="question-upload"
                />
                <label htmlFor="question-upload" className="cursor-pointer">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Image className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-gray-900 mb-1">
                    Scan Question
                  </p>
                  <p className="text-sm text-gray-600">
                    JPG, PNG, or PDF
                  </p>
                </label>
              </div>

              {scannedQuestion && (
                <Card className="mt-4 bg-orange-50 border border-orange-200">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Detected Question:</h4>
                    <p className="text-sm text-orange-700">{scannedQuestion}</p>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            {loading ? (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Analyzing question and finding resources...</p>
                </div>
              </Card>
            ) : resources.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Learning Resources</h3>
                {resources.map((resource, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${
                              resource.type === 'Video Lesson' ? 'bg-red-100 text-red-700' :
                              resource.type === 'Practice Set' ? 'bg-blue-100 text-blue-700' :
                              resource.type === 'Theory Notes' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {resource.type}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              resource.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                              resource.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {resource.difficulty}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                          <div className="flex items-center text-xs text-gray-500 space-x-4">
                            {resource.duration && <span>⏱️ {resource.duration}</span>}
                            {resource.questions && <span>📝 {resource.questions} questions</span>}
                            {resource.pages && <span>📄 {resource.pages} pages</span>}
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 ml-4"
                        >
                          <BookOpen className="w-4 h-4 mr-1" />
                          Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Upload a question to get personalized learning resources</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Smart Question Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-orange-100 text-sm">Powered Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-orange-100 text-sm">Question Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-orange-100 text-sm">Video Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-orange-100 text-sm">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamScanner;
