import pk from "@/package.json";
import avatar from "@/assets/avatar.png";

const [name, lastName] = pk.author.name.split(" ");

export const MY_DETAILS = {
    fullName: pk.author.name,
    name,
    lastName,
    avatar,
    jobTitle: "Full-Stack Developer",
};