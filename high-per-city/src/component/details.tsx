import Link from "next/link";
import { ApiData } from "../Type/data"
export default function Details({ children }) {
    
    return (
        <div>
            <h1 className="font-bold pb-3 text-2xl">{children.author}</h1>
            <div>
            <p className="flex border">{children.content}</p>
        </div>
        </div>

    )
}