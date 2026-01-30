import { ReactNode } from "react"

export function IconButton({
    icon,
    onClick,
    activated
}: {
    icon: ReactNode,
    onClick: () => void,
    activated: boolean
}) {

    return (
        <div
            className={`cursor-pointer rounded-xl border p-3 transition-colors ${activated
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700 hover:shadow-sm"
                }`}
            onClick={onClick}
        >
            {icon}
        </div>
    );
}
