import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Search, Send, Upload, FileText } from "lucide-react";

interface ChatWithPDFProps {
  onBack: () => void;
}

const ChatWithPDF = ({ onBack }: ChatWithPDFProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<
    Array<{ type: "user" | "ai"; content: string }>
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setMessages([
        {
          type: "ai",
          content: `Great! I've analyzed "${file.name}". You can now ask me questions about the content, request summaries, or get explanations of specific topics. What would you like to know?`,
        },
      ]);
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInputMessage("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      if (userMessage.toLowerCase().includes("summary")) {
        response =
          "📚 **Document Summary:**\n\nThis document covers advanced calculus concepts including:\n\n• **Derivatives**: Rules for finding rates of change\n• **Integrals**: Techniques for finding areas under curves\n• **Applications**: Real-world problem solving\n\nKey formulas and theorems are highlighted throughout, with practice problems at the end of each section.";
      } else if (userMessage.toLowerCase().includes("derivative")) {
        response =
          "🔍 **About Derivatives:**\n\nFrom your document, I found several key points about derivatives:\n\n• **Definition**: The derivative measures the rate of change\n• **Power Rule**: d/dx(x^n) = nx^(n-1)\n• **Chain Rule**: For composite functions f(g(x))\n\nThe document includes examples on pages 15-18. Would you like me to explain any specific derivative rule?";
      } else {
        response = `💡 I found relevant information about "${userMessage}" in your document. The content discusses this topic in detail with examples and explanations. Would you like me to:\n\n• Provide a detailed explanation\n• Show related examples\n• Find practice problems\n• Connect to other topics?`;
      }

      setMessages((prev) => [...prev, { type: "ai", content: response }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Chat with PDF/Video
          </h1>
          <p className="text-lg text-gray-600">
            Upload documents and chat with AI for instant answers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2 text-indigo-600" />
                Upload Content
              </CardTitle>
              <CardDescription>
                Upload PDF documents or video files to start chatting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.mp4,.mov,.avi"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="content-upload"
                />
                <label htmlFor="content-upload" className="cursor-pointer">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="font-medium text-gray-900 mb-1">Upload File</p>
                  <p className="text-sm text-gray-600">PDF or Video files</p>
                </label>
              </div>

              {uploadedFile && (
                <Card className="mt-4 bg-indigo-50 border border-indigo-200">
                  <CardContent className="pt-4 flex items-center">
                    <FileText className="w-8 h-8 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-indigo-800">
                        {uploadedFile.name}
                      </p>
                      <p className="text-sm text-indigo-600">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {uploadedFile && (
                <div className="mt-4 space-y-2">
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-sm"
                    onClick={() =>
                      window.open("http://localhost:8501/", "_blank")
                    } // Replace with your actual URL
                  >
                    📄 Open Streamlit Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() =>
                      setInputMessage("What are the key concepts explained?")
                    }
                  >
                    🔍 Key Concepts
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chat Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-96">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2 text-indigo-600" />
                  Chat Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-8">
                      <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Upload a document to start chatting with AI</p>
                    </div>
                  ) : (
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.type === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.type === "user"
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <div className="whitespace-pre-line text-sm">
                            {message.content}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about the document..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    disabled={!uploadedFile}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!uploadedFile || !inputMessage.trim() || loading}
                    className="bg-gradient-to-r from-indigo-500 to-blue-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                AI-Powered Document Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">✨</div>
                  <div className="text-indigo-100 text-sm">Smart Q&A</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">📊</div>
                  <div className="text-indigo-100 text-sm">
                    Instant Summaries
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">🔍</div>
                  <div className="text-indigo-100 text-sm">Deep Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">💡</div>
                  <div className="text-indigo-100 text-sm">Smart Insights</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatWithPDF;
