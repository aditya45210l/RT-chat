'use client'
import { Copy } from "lucide-react";
import { useParams } from "next/navigation"

const Page = () => {
    const { roomId } = useParams();

    return (
        <>
            <main className="flex flex-col">
                <nav className="px-4 flex flex-row justify-between py-3">
                    <div className="flex  flex-col text-start">
                        <span className="text-sm text-zinc-500">Room Id:</span>
                        <span className="flex mr-2 flex-row"><p className="text-green-500 ">{roomId} </p><button className=" flex gap-0.5 items-center cursor-pointer px-1.5 text-zinc-500 text-xs font-bold transition-all active:scale-90">
                            <Copy size={14} />
                        </button></span>

                    </div>
                    <div></div>
                    <div></div>
                </nav>
                <section></section>
                <section></section>
            </main>
        </>
    )
}

export default Page