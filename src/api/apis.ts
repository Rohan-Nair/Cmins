import axios from "axios";
import { LANGS } from "../constants/langs";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const runCodeCall = async (language: string, code: string, ip: string) => {
    try {
        const res = await API.post("/execute", {
            "language": language,
            "version": LANGS[language as keyof typeof LANGS],
            "files": [
                {
                    "content": code,
                }
            ],
            "stdin": ip,

        });
        return res.data;
    } catch (e) {
        console.error(e);
    }
}
