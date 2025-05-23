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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Users, Globe } from "lucide-react";

interface LocalLanguageProps {
  onBack: () => void;
}

const LocalLanguage = ({ onBack }: LocalLanguageProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = [
    { code: "hi", name: "Hindi", native: "हिन्दी" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", name: "Malayalam", native: "മലയാളം" },
    { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "as", name: "Assamese", native: "অসমীয়া" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Check for Local Language Availability
          </h1>
          <p className="text-lg text-gray-600">
            Learn in your preferred regional language
          </p>
        </div>

        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-600" />
              Choose Your Language
            </CardTitle>
            <CardDescription>
              Select your preferred regional language for learning content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.name}</span>
                      <span className="text-gray-500">({lang.native})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {selectedLanguage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800">
                  Available Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700">
                  <li>✓ Mathematics lessons</li>
                  <li>✓ Science explanations</li>
                  <li>✓ History narratives</li>
                  <li>✓ Literature analysis</li>
                  <li>✓ Practice exercises</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Learning Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700">
                  <li>🎧 Audio pronunciation</li>
                  <li>📝 Native script support</li>
                  <li>🎭 Cultural context</li>
                  <li>📚 Regional examples</li>
                  <li>🗣️ Voice interaction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        <Card className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">
                Breaking Language Barriers
              </h3>
              <p className="text-green-100 mb-4">
                Learn complex concepts in the language you're most comfortable
                with
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-green-100 text-sm">Languages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-green-100 text-sm">Lessons</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-green-100 text-sm">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-green-100 text-sm">Support</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocalLanguage;
