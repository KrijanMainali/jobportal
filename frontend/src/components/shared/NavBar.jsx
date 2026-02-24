import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2, Info, Mail, BookOpen } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import DarkMode from '../ui/darkMode'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="sticky top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 dark:text-white shadow-md transition-colors duration-300">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">Job<span className="text-[#F83002]">Mitra</span></Link>
                </h1>

                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">

                        {user && user.role === "recruiter" ? (
                            <>
                                <DarkMode />
                                <li><Link to="/admin/companies">Companies</Link></li>
                                <li><Link to="/admin/jobs">Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <DarkMode />
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/jobs">Jobs</Link></li>
                                <li><Link to="/browse">Browse</Link></li>

                                {user?.role === "student" && (
                                    <li><Link to="/getRecommendations">Recommendations</Link></li>
                                )}

                                {user?.role === "student" && (
                                    <li><Link to="/resumebuilder">Resume Builder</Link></li>
                                )}

                                {/* ✅ SHADCN More Dropdown */}
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="font-medium ">
                                                More
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="end" className="w-48">
                                            <DropdownMenuItem asChild>
                                                <Link to="/about" className="flex items-center gap-2 font-medium">
                                                    <Info size={16} />
                                                    About Us
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem asChild>
                                                <Link to="/contact" className="flex items-center gap-2 font-medium">
                                                    <Mail size={16} />
                                                    Contact Us
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem asChild>
                                                <Link to="/training" className="flex items-center gap-2 font-medium">
                                                    <BookOpen size={16} />
                                                    Training
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Auth Section */}
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#683ac2] hover:bg-[#301070]">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} />
                                </Avatar>
                            </PopoverTrigger>

                            <PopoverContent className="w-80">
                                <div>
                                    <div className="flex gap-3 items-center">
                                        <Avatar>
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">{user?.fullname}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {user?.profile?.bio}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-4 space-y-2">
                                        {user?.role === "student" && (
                                            <Link to="/profile" className="flex items-center gap-2 text-sm hover:text-primary">
                                                <User2 size={16} />
                                                View Profile
                                            </Link>
                                        )}

                                        <button
                                            onClick={logoutHandler}
                                            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;