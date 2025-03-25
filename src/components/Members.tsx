import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const teams = {
    "Technical Team": [
        { name: "John Doe", github: "#", linkedin: "#", email: "#", image: "https://i.pravatar.cc/300?img=1" },
        { name: "Jane Smith", github: "#", linkedin: "#", email: "#", image: "https://i.pravatar.cc/300?img=3" }
    ],
    "Design Team": [
        { name: "Alice Brown", github: "#", linkedin: "#", email: "#", image: "https://via.placeholder.com/100" },
        { name: "Bob White", github: "#", linkedin: "#", email: "#", image: "https://via.placeholder.com/100" },
    ],
    "Resource Team": [
        { name: "Charlie Green", github: "#", linkedin: "#", email: "#", image: "https://via.placeholder.com/100" },
    ],
    "Photography Team": [
        { name: "David Black", github: "#", linkedin: "#", email: "#", image: "https://via.placeholder.com/100" },
    ],
};

export function Members() {
    const [selectedTeam, setSelectedTeam] = useState<string | null>("Technical Team");

    return (
        <div className="p-6 max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
                {Object.keys(teams).map((team) => (
                    <button
                        key={team}
                        onClick={() => setSelectedTeam(team)}
                        className={`px-4 py-2 rounded-lg text-white transition-all ${
                            selectedTeam === team ? "bg-blue-600" : "bg-gray-500 hover:bg-blue-500"
                        }`}
                    >
                        {team}
                    </button>
                ))}
            </div>
            
            {selectedTeam && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teams[selectedTeam].map((member) => (
                        <div key={member.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mb-4" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <div className="flex gap-3 mt-2">
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                    <Github size={20} />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                                    <Linkedin size={20} />
                                </a>
                                <a href={`mailto:${member.email}`} className="text-red-500 hover:text-red-700">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}