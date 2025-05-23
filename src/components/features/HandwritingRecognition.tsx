
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Upload, Download } from 'lucide-react';

interface HandwritingRecognitionProps {
  onBack: () => void;
}

const HandwritingRecognition = ({ onBack }: HandwritingRecognitionProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [convertedText, setConvertedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Simulate OCR processing
      setLoading(true);
      setTimeout(() => {
        setConvertedText(`
Mathematics Notes - Chapter 5: Quadratic Equations

Key Concepts:
• A quadratic equation is an equation of the form ax² + bx + c = 0
• The solutions can be found using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a
• The discriminant (b²-4ac) determines the nature of roots

Example Problems:
1. Solve: x² - 5x + 6 = 0
   Using factoring: (x-2)(x-3) = 0
   Solutions: x = 2 or x = 3

2. Find roots of: 2x² + 3x - 1 = 0
   Using quadratic formula:
   x = (-3 ± √(9+8)) / 4 = (-3 ± √17) / 4

Important Notes:
- Always check if the equation can be factored first
- Remember to simplify radicals in final answers
- Graph opens upward if a > 0, downward if a < 0
        `);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Handwriting Recognition</h1>
          <p className="text-lg text-gray-600">Convert your handwritten notes to digital text</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2 text-purple-600" />
                Upload Your Notes
              </CardTitle>
              <CardDescription>
                Upload an image of your handwritten notes for conversion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drop your image here or click to browse
                  </p>
                  <p className="text-sm text-gray-600">
                    Supports JPG, PNG, and other image formats
                  </p>
                </label>
              </div>
              
              {uploadedFile && (
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium">Uploaded: {uploadedFile.name}</p>
                  <p className="text-xs text-gray-600">Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                Converted Text
              </CardTitle>
              <CardDescription>
                Your handwritten notes converted to editable text
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Processing your handwriting...</p>
                  </div>
                </div>
              ) : convertedText ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg h-64 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                      {convertedText}
                    </pre>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-violet-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download Text
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Copy to Clipboard
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-400">
                  Upload an image to see the converted text here
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">AI-Powered Recognition Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">Multiple Languages</h4>
                  <p className="text-purple-100 text-sm">Supports English, Hindi, and regional scripts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">High Accuracy</h4>
                  <p className="text-purple-100 text-sm">95%+ accuracy with clear handwriting</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Download className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-1">Export Options</h4>
                  <p className="text-purple-100 text-sm">Save as TXT, PDF, or Word documents</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HandwritingRecognition;
