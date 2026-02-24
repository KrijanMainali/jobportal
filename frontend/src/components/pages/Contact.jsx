import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavBar from "../shared/NavBar";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Page Content */}
            <div className="min-h-screen bg-background py-16">
                <div className="container mx-auto max-w-4xl px-4 space-y-16">

                    {/* Heading Section */}
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            We’d love to hear from you! Reach out via email, phone, social media, or send us a message directly.
                        </p>
                    </div>

                    {/* Contact Info Card */}
                    <Card className="shadow-lg border rounded-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                                Get in Touch
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-10">

                            {/* Contact Info */}
                            <div className="grid gap-6 sm:grid-cols-3 text-center text-gray-800 dark:text-gray-200">
                                <div className="flex flex-col items-center gap-2">
                                    <Mail size={20} className="text-primary" />
                                    <span className="font-medium">support@jobmitra.com</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Phone size={20} className="text-primary" />
                                    <span className="font-medium">+977-9800000000</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <MapPin size={20} className="text-primary" />
                                    <span className="font-medium">Kathmandu, Nepal</span>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form className="space-y-4">
                                <Input placeholder="Your Name" className="text-gray-900 dark:text-white" />
                                <Input type="email" placeholder="Your Email" className="text-gray-900 dark:text-white" />
                                <Textarea placeholder="Your Message" rows={5} className="text-gray-900 dark:text-white" />
                                <Button className="w-full">Send Message</Button>
                            </form>

                        </CardContent>
                    </Card>

                    {/* Horizontal Social Media Banner */}
                    <div className="flex justify-between items-center bg-primary/10 dark:bg-primary/20 border border-primary/40 rounded-lg py-6 px-8">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Follow Us On
                        </h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full hover:bg-purple-700 transition">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;