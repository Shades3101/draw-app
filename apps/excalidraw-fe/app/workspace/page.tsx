import getUser from "@/lib/authGuard"

export default async function Workspace() {

    // const user = await getUser();

    // if(!user) {
    //     return
    // }

    return <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-zinc-900">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 h-64 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Workspace</h1>
        </div>
    </div>
}