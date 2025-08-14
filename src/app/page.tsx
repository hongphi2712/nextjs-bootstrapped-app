"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-poppins font-bold text-xl text-gray-900">LoveConnect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">How it Works</a>
            <a href="#success-stories" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Success Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-pink-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-pink-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-pink-600 transition-colors font-medium">How it Works</a>
              <a href="#success-stories" className="block text-gray-600 hover:text-pink-600 transition-colors font-medium">Success Stories</a>
              <a href="#pricing" className="block text-gray-600 hover:text-pink-600 transition-colors font-medium">Pricing</a>
              <div className="pt-4 border-t space-y-2">
                <Button variant="ghost" className="w-full text-gray-600 hover:text-pink-600">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200">
                  ✨ Find Your Perfect Match
                </Badge>
                <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                  We connect
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500"> hearts </span>
                  that beat as one
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover meaningful connections with people who share your values, interests, and dreams. Your perfect match is just a swipe away.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg font-semibold"
                >
                  Start Dating Now 💕
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg font-semibold"
                >
                  Watch How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-gray-900">2M+</div>
                  <div className="text-sm text-gray-600">Happy Couples</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">App Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://placehold.co/600x700?text=Beautiful+couple+holding+hands+romantic+sunset+modern+photography+style" 
                  alt="Beautiful couple holding hands in romantic sunset setting"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
              
              {/* Floating Cards */}
              <Card className="absolute -left-8 top-1/4 w-48 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah & Mike</div>
                      <div className="text-sm text-gray-600">Matched 2 years ago</div>
                      <div className="text-xs text-pink-600">💕 Now Married</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -right-8 bottom-1/4 w-48 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Emma & James</div>
                      <div className="text-sm text-gray-600">Perfect Match!</div>
                      <div className="text-xs text-pink-600">🎉 Just Engaged</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 rotate-12">💕</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 -rotate-12">💖</div>
        <div className="absolute top-1/2 left-1/4 text-3xl opacity-5 rotate-45">💘</div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200">
              Why Choose LoveConnect
            </Badge>
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-gray-900">
              Features that bring hearts together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced matching algorithm and intuitive features make finding love easier than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Matching",
                description: "Our AI-powered algorithm learns your preferences and suggests compatible matches based on shared interests and values.",
                icon: "🧠"
              },
              {
                title: "Video Profiles",
                description: "Get to know potential matches better with video introductions and authentic personality showcases.",
                icon: "🎥"
              },
              {
                title: "Safe & Secure",
                description: "Advanced verification system and privacy controls ensure a safe dating environment for everyone.",
                icon: "🛡️"
              },
              {
                title: "Real-time Chat",
                description: "Connect instantly with your matches through our seamless messaging system with photo and emoji support.",
                icon: "💬"
              },
              {
                title: "Location-based",
                description: "Find matches in your area or expand your search radius to discover love anywhere in the world.",
                icon: "📍"
              },
              {
                title: "Success Stories",
                description: "Join thousands of couples who found their perfect match and built lasting relationships through our platform.",
                icon: "💕"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pink-50/30">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white">
            Ready to find your soulmate?
          </h2>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
            Join millions of singles who have found love through LoveConnect. Your perfect match is waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg font-semibold"
            >
              Download App
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-6 text-lg font-semibold"
            >
              Start Web Version
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-poppins font-bold text-xl">LoveConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting hearts worldwide. Find your perfect match today.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>How it Works</div>
                <div>Success Stories</div>
                <div>Pricing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Safety</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LoveConnect. All rights reserved. Made with 💕 for finding love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
