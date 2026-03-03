import { MetadataRoute } from "next";
import pk from '../package.json';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: pk.name,
        short_name: pk.name,
        description: pk.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
    };
};