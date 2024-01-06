import Details from "@/component/details"
import { Children } from "react"

export default function PageDetails({ searchParams }) {
    return (
        <div>
            <Details>{searchParams}</Details>
        </div>
    )
}