
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookText, Send } from 'lucide-react';

interface ExplainLikeChildProps {
  onBack: () => void;
}

const ExplainLikeChild = ({ onBack }: ExplainLikeChildProps) => {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setExplanation(`
        🌟 Let's learn about "${topic}" in a simple way!

        Imagine you're 5 years old and someone asks you about ${topic}. Here's how we'd explain it:

        📚 Think of ${topic} like a toy box. Just like how you have different toys for different games, ${topic} has different parts that work together.

        🎨 Picture this: If ${topic} was a crayon box, each part would be a different color that helps create a beautiful picture when used together.

        🏠 It's like building blocks! Each piece of ${topic} is like a block, and when you stack them up just right, you build something amazing.

        🌈 Remember: Learning about ${topic} is like going on an adventure. Every new thing you discover is like finding a treasure!

        Keep asking questions and stay curious! 🚀
      `);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explain Like I'm Five</h1>
          <p className="text-lg text-gray-600">Make complex topics simple and fun to understand!</p>
        </div>

        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>What would you like to learn about?</CardTitle>
            <CardDescription>
              Enter any topic and we'll explain it in the simplest way possible!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                placeholder="e.g., Photosynthesis, Gravity, Democracy..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleExplain()}
              />
              <Button 
                onClick={handleExplain}
                disabled={loading || !topic.trim()}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                {loading ? (
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {explanation && (
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-lg animate-fade-in">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                  {explanation}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!explanation && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white/60 border-0 cursor-pointer hover:bg-white/80 transition-all" onClick={() => setTopic('Photosynthesis')}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">🌱 Photosynthesis</h3>
                <p className="text-sm text-gray-600">How plants make their own food</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 border-0 cursor-pointer hover:bg-white/80 transition-all" onClick={() => setTopic('Gravity')}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">🪐 Gravity</h3>
                <p className="text-sm text-gray-600">Why things fall down</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 border-0 cursor-pointer hover:bg-white/80 transition-all" onClick={() => setTopic('Democracy')}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">🗳️ Democracy</h3>
                <p className="text-sm text-gray-600">How people choose their leaders</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 border-0 cursor-pointer hover:bg-white/80 transition-all" onClick={() => setTopic('DNA')}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">🧬 DNA</h3>
                <p className="text-sm text-gray-600">The instruction manual of life</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplainLikeChild;
