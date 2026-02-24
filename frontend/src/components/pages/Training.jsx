import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Training = () => {
  return (
    <>
      {/* Navbar (no padding wrapper) */}
      <NavBar />

      {/* Page Content */}
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-16 space-y-12">

          {/* Heading Section */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Training Programs
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upgrade your skills with our professional training programs
              designed to help you stand out in today’s competitive job market.
            </p>
          </div>

          {/* Training Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen size={18} />
                  Resume Writing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Learn how to create ATS-friendly resumes that increase your chances of getting shortlisted.
                </p>
                <Button className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  Interview Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Participate in mock interviews and receive expert guidance to boost your confidence.
                </p>
                <Button className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users size={18} />
                  Career Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Get a personalized roadmap to achieve your professional goals and career growth.
                </p>
                <Button className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Training;