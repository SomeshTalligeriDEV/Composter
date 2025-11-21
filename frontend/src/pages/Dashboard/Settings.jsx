import React from "react";
import { User, Shield, Bell, Moon } from "lucide-react";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";

const Settings = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-white/60">Manage your account and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-2">
                    {[
                        { icon: User, label: "Profile", active: true },
                        { icon: Shield, label: "Security" },
                        { icon: Bell, label: "Notifications" },
                        { icon: Moon, label: "Appearance" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                                    ? "bg-white/10 text-white font-medium"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                    <Card className="p-8">
                        <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-500/30">
                                ST
                            </div>
                            <div>
                                <Button variant="secondary" className="mb-2">Change Avatar</Button>
                                <p className="text-xs text-white/40">JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <Input
                                    id="firstName"
                                    label="First Name"
                                    defaultValue="Somesh"
                                />
                                <Input
                                    id="lastName"
                                    label="Last Name"
                                    defaultValue="Talligeri"
                                />
                            </div>

                            <Input
                                id="email"
                                type="email"
                                label="Email Address"
                                defaultValue="somesh@example.com"
                            />

                            <div className="pt-4 flex justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </form>
                    </Card>

                    <Card className="p-8 mt-8">
                        <h2 className="text-xl font-semibold text-white mb-6">API Access</h2>
                        <p className="text-sm text-white/60 mb-4">
                            Use this token to authenticate with the CLI.
                        </p>

                        <div className="flex gap-2">
                            <Input
                                className="font-mono text-sm"
                                readOnly
                                value="sk_live_51J9z...x8s9"
                            />
                            <Button variant="secondary">Copy</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Settings;
