"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Pencil,
    Plus,
    Search,
    Clock,
    Users,
    MoreVertical,
    LayoutGrid,
    History,
    Settings,
    LogOut,
    FolderOpen
} from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Room {
    id: string;
    name: string;
    lastEdited: string;
    collaborators: number;
    rotate: number;
    color: string;
}

const MOCK_ROOMS: Room[] = [
    { id: "1", name: "Product Roadmap 2026", lastEdited: "2h ago", collaborators: 3, rotate: 1, color: "bg-blue-100" },
    { id: "2", name: "User Flow Brainstorm", lastEdited: "5h ago", collaborators: 1, rotate: -1, color: "bg-orange-100" },
    { id: "3", name: "Q3 Design System", lastEdited: "1d ago", collaborators: 5, rotate: 2, color: "bg-green-100" },
    { id: "4", name: "Marketing Campaign", lastEdited: "3d ago", collaborators: 2, rotate: -2, color: "bg-purple-100" },
];

export default function Workspace() {
    const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS);
    const [searchQuery, setSearchQuery] = useState("");
    const [newRoomName, setNewRoomName] = useState("");

    const filteredRooms = rooms.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCreateRoom = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newRoomName.trim()) return;

        const newRoom: Room = {
            id: Math.random().toString(36).substr(2, 9),
            name: newRoomName,
            lastEdited: "Just now",
            collaborators: 1,
            rotate: Math.random() * 4 - 2,
            color: ["bg-blue-100", "bg-orange-100", "bg-green-100", "bg-purple-100", "bg-yellow-100"][Math.floor(Math.random() * 5)] as string
        };

        setRooms([newRoom, ...rooms]);
        setNewRoomName("");
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-[#2c2c2c] flex">
            {/* Decorative Grid Background */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 border-r-4 border-[#2c2c2c] bg-white z-20 hidden md:flex flex-col">
                <div className="p-6 border-b-4 border-[#2c2c2c]">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 border-2 border-[#2c2c2c] rotate-3 flex items-center justify-center rounded-sm bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <Pencil className="w-4 h-4 -rotate-12" />
                        </div>
                        <span className="text-xl font-black tracking-tight uppercase italic">Scribble.</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {[
                        { icon: LayoutGrid, label: "My Boards", active: true },
                        { icon: Users, label: "Shared with me" },
                        { icon: History, label: "Recent" },
                        { icon: FolderOpen, label: "Templates" },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center gap-3 px-4 py-3 font-bold uppercase tracking-tight text-sm transition-all border-2 border-transparent ${item.active
                                    ? "bg-[#2c2c2c] text-white shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]"
                                    : "hover:border-[#2c2c2c] hover:bg-zinc-50"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t-4 border-[#2c2c2c] space-y-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm hover:bg-zinc-100 transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm hover:text-red-600 transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 relative z-10 p-6 md:p-12">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-2">
                            MY WORKSPACE
                        </h1>
                        <p className="font-bold text-zinc-500 uppercase tracking-widest text-xs">
                            {rooms.length} Boards • Last active 2 hours ago
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-[#2c2c2c]" />
                            <input
                                type="text"
                                placeholder="Search boards..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border-2 border-[#2c2c2c] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-bold uppercase text-xs w-full md:w-64"
                            />
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="px-6 py-2 bg-blue-500 text-white border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 font-black uppercase italic text-sm">
                                    <Plus className="w-5 h-5" />
                                    New Board
                                </button>
                            </DialogTrigger>
                            <DialogContent className="border-4 border-[#2c2c2c] bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none">
                                <DialogHeader>
                                    <DialogTitle className="text-3xl font-black uppercase italic tracking-tight">Create New Board</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleCreateRoom} className="space-y-6 pt-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-black uppercase tracking-widest">Board Name</label>
                                        <input
                                            autoFocus
                                            placeholder="e.g. My Next Big Idea"
                                            value={newRoomName}
                                            onChange={(e) => setNewRoomName(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none font-bold text-lg"
                                        />
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <button
                                            type="submit"
                                            disabled={!newRoomName.trim()}
                                            className="px-8 py-3 bg-[#2c2c2c] text-white border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,1)] transition-all font-black uppercase italic disabled:opacity-50"
                                        >
                                            Launch Editor
                                        </button>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </header>

                {filteredRooms.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 border-4 border-dashed border-[#2c2c2c] bg-zinc-50/50">
                        <div className="w-20 h-20 border-2 border-[#2c2c2c] rotate-12 flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                            <Pencil className="w-10 h-10 text-zinc-300" />
                        </div>
                        <h3 className="text-2xl font-black uppercase italic mb-2">No boards found</h3>
                        <p className="font-bold text-zinc-400 uppercase text-sm mb-8">Start sketching your next masterpiece</p>
                        <button
                            onClick={() => (document.querySelector('[data-state="closed"]') as HTMLElement)?.click()}
                            className="px-8 py-3 border-2 border-[#2c2c2c] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase italic hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            Create Your First Board
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredRooms.map((room) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ rotate: `${room.rotate}deg` }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-[#2c2c2c] translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                                <div className="relative border-2 border-[#2c2c2c] bg-white h-full flex flex-col transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                                    {/* Card Preview Area */}
                                    <div className={`h-40 ${room.color} border-b-2 border-[#2c2c2c] relative overflow-hidden p-4`}>
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }} />
                                        <div className="w-full h-full border-2 border-dashed border-[#2c2c2c]/30 rounded flex items-center justify-center">
                                            <Pencil className="w-8 h-8 text-[#2c2c2c]/20" />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-black uppercase tracking-tight text-lg leading-tight group-hover:text-blue-600 transition-colors">
                                                {room.name}
                                            </h3>
                                            <button className="p-1 hover:bg-zinc-100 rounded">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between font-bold text-[10px] uppercase tracking-widest text-zinc-500">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3 h-3" />
                                                {room.lastEdited}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 border border-[#2c2c2c] bg-zinc-50 rounded-sm">
                                                <Users className="w-3 h-3" />
                                                {room.collaborators}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Actions Overlay */}
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none" />
                                    <Link
                                        href={`/canvas/${room.id}`}
                                        className="absolute inset-0 z-10"
                                        aria-label={`Open ${room.name}`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}