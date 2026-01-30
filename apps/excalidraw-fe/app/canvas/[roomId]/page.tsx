import { RoomCanvas } from "@/components/RoomCanvas";
import { getAccessToken } from "@/lib/getAccessToken";

export default async function CanvasPage({ params }: {
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;
    const token = await getAccessToken();

    if (!token) {
        return (
            <div className="h-screen flex items-center justify-center text-gray-900 dark:text-white bg-white dark:bg-zinc-950">
                Please sign in to access this room.
            </div>
        );
    }

    return <RoomCanvas roomId={roomId} token={token} />;
}