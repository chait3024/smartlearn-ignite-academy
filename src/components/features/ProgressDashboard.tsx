
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, BookOpen, TrendingUp, Award } from 'lucide-react';

interface ProgressDashboardProps {
  onBack: () => void;
}

const ProgressDashboard = ({ onBack }: ProgressDashboardProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const weeklyData = [
    { day: 'Mon', sessions: 3, time: 45 },
    { day: 'Tue', sessions: 2, time: 30 },
    { day: 'Wed', sessions: 4, time: 60 },
    { day: 'Thu', sessions: 1, time: 15 },
    { day: 'Fri', sessions: 3, time: 40 },
    { day: 'Sat', sessions: 5, time: 75 },
    { day: 'Sun', sessions: 2, time: 25 }
  ];

  const subjects = [
    { name: 'Mathematics', progress: 85, sessions: 24, timeSpent: 480 },
    { name: 'Physics', progress: 72, sessions: 18, timeSpent: 360 },
    { name: 'Chemistry', progress: 68, sessions: 15, timeSpent: 300 },
    { name: 'Biology', progress: 91, sessions: 22, timeSpent: 420 },
    { name: 'English', progress: 77, sessions: 20, timeSpent: 380 }
  ];

  const achievements = [
    { title: 'Fast Learner', description: 'Completed 5 topics in one day', icon: '⚡', earned: true },
    { title: 'Consistent Student', description: '7 days streak', icon: '🔥', earned: true },
    { title: 'Math Master', description: '90% accuracy in math problems', icon: '🧮', earned: false },
    { title: 'Explorer', description: 'Used all learning tools', icon: '🗺️', earned: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-pink-600 hover:text-pink-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Dashboard</h1>
          <p className="text-lg text-gray-600">Track your learning journey and achievements</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Sessions</p>
                  <p className="text-3xl font-bold">87</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Hours Studied</p>
                  <p className="text-3xl font-bold">142</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Average Score</p>
                  <p className="text-3xl font-bold">85%</p>
                </div>
                <Award className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Streak Days</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Activity */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-pink-600" />
                Weekly Activity
              </CardTitle>
              <CardDescription>Your learning sessions this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-700">{day.sessions} sessions</span>
                          <span className="text-sm text-gray-500">{day.time}min</span>
                        </div>
                        <Progress value={(day.sessions / 5) * 100} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-pink-600" />
                Subject Progress
              </CardTitle>
              <CardDescription>Your progress across different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{subject.name}</span>
                      <span className="text-sm text-gray-600">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{subject.sessions} sessions</span>
                      <span>{Math.floor(subject.timeSpent / 60)}h {subject.timeSpent % 60}m</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-pink-600" />
              Achievements
            </CardTitle>
            <CardDescription>Your learning milestones and badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`border-0 ${achievement.earned 
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200' 
                    : 'bg-gray-50 opacity-60'
                  }`}
                >
                  <CardContent className="pt-4 text-center">
                    <div className={`text-3xl mb-2 ${achievement.earned ? '' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`font-semibold mb-1 ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-xs ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <div className="mt-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Earned
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card className="mt-8 bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">This Week's Goals</h3>
              <p className="text-pink-100">Stay on track with your learning objectives</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold mb-1">5/7</div>
                <div className="text-pink-100 text-sm">Study Sessions</div>
                <Progress value={71} className="mt-2 bg-pink-400" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold mb-1">8/10</div>
                <div className="text-pink-100 text-sm">Topics Completed</div>
                <Progress value={80} className="mt-2 bg-pink-400" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold mb-1">85%</div>
                <div className="text-pink-100 text-sm">Average Score</div>
                <Progress value={85} className="mt-2 bg-pink-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressDashboard;
