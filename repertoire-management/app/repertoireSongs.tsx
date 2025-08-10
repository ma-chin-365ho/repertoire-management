import { TypeRepertoireSong } from "./types/typeRepertoire";

export default function RepertoireSongs(props: { repertoireSongs: TypeRepertoireSong[], onClickSong: (idx: number) => void }) {
    return (
        <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {props.repertoireSongs.map((song, idx) => (
                <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600" onClick={() => props.onClickSong(idx)}>
                    {song.title}
                </a>
            ))}
            <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                追加
            </a>
        </div>
    );
}
