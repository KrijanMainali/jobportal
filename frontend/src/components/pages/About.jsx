import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Briefcase } from "lucide-react";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const About = () => {
  return (
    <>
      {/* Navbar stays outside padding */}
      <NavBar />

      {/* Page Content */}
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-16 space-y-16">

          {/* About Section */}
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                About JobMitra
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground text-sm md:text-base">
              JobMitra is a smart job portal connecting students and recruiters.
              We provide resume building, job recommendations, and hiring solutions
              through a modern and user-friendly interface.
            </CardContent>
          </Card>

          <Separator />

          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-3">
                <Users size={40} className="mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Who We Help</h3>
                <p className="text-sm text-muted-foreground">
                  Students, fresh graduates, and recruiters seeking talent.
                </p>
              </CardContent>
            </Card>

            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-3">
                <Target size={40} className="mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To simplify the job search and recruitment process.
                </p>
              </CardContent>
            </Card>

            <Card className="transition hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-3">
                <Briefcase size={40} className="mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Becoming Nepal’s leading digital employment platform.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;