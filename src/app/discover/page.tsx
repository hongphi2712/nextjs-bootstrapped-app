"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DiscoverPage() {
  const [currentProfile, setCurrentProfile] = useState(0);
  
  const profiles = [
    {
      id: 1,
      name: "Emma",
      age: 28,
      location: "New York, NY",
      bio: "Love hiking, coffee, and good conversations. Looking for someone genuine to explore the city with.",
      interests: ["Travel", "Photography", "Coffee", "Hiking", "Art"],
      image: "https://placehold.co/400x600?text=Beautiful+woman+smiling+natural+portrait+photography"
    },
    {
      id: 2,
      name: "Sarah",
      age: 26,
      location: "Los Angeles, CA",
      bio: "Yoga instructor and foodie. Passionate about wellness and trying new restaurants.",
      interests: ["Yoga", "Cooking", "Music", "Dancing", "Nature"],
      image: "https://placehold.co/400x600?text=Attractive+woman+yoga+pose+outdoor+natural+light"
    },
    {
      id: 3,
      name: "Jessica",
      age: 30,
      location: "Chicago, IL",
      bio: "Marketing professional who loves books, wine, and weekend adventures.",
      interests: ["Books", "Wine", "Movies", "Travel", "Fashion"],
      image: "https://placehold.co/400x600?text=Professional+woman+reading+book+cozy+cafe+setting"
    }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // It's a match! Show match animation
      console.log('Match!');
    }
    
    // Move to next profile
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  const profile = profiles[currentProfile];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-poppins font-bold text-xl text-gray-900">LoveConnect</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/matches" className="text-gray-600 hover:text-pink-600">
              <div className="w-8 h-8 flex items-center justify-center">💕</div>
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-pink-600">
              <div className="w-8 h-8 flex items-center justify-center">💬</div>
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-pink-600">
              <div className="w-8 h-8 flex items-center justify-center">👤</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <Card className="relative overflow-hidden shadow-2xl border-0 bg-white">
            <div className="relative">
              <img 
                src={profile.image}
                alt={`${profile.name}'s profile photo`}
                className="w-full h-96 object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Profile info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="font-poppins font-bold text-2xl mb-1">
                  {profile.name}, {profile.age}
                </h2>
                <p className="text-pink-100 mb-2">📍 {profile.location}</p>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-pink-200 text-pink-700 bg-pink-50"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 text-gray-600 hover:text-red-500"
              onClick={() => handleSwipe('left')}
            >
              <span className="text-2xl">✕</span>
            </Button>
            
            <Button
              size="lg"
              className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg"
              onClick={() => handleSwipe('right')}
            >
              <span className="text-3xl">💕</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-blue-600"
            >
              <span className="text-2xl">⭐</span>
            </Button>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">
              Swipe right to like, left to pass
            </p>
            <div className="flex justify-center space-x-2">
              {profiles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentProfile ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
