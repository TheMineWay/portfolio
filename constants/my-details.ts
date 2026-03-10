import pk from "@/package.json";
import avatar from "@/assets/avatar.png";

export const MY_DETAILS = {
    fullName: pk.author.name,
    name: pk.author.name.split(" ")[0],
    avatar,
    jobTitle: "Full-Stack Developer",
};