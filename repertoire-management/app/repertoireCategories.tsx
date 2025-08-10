import { useState } from 'react';

import { TypeRepertoire } from "./types/typeRepertoire";

export default function RepertoireCategories(props: { repertoires: TypeRepertoire[], onClickCategory: (categoryIdx: number) => void }) {
    const [isAddMode, setIsAddMode] = useState<boolean>(false);
    const [idxEdit, setIdxEdit] = useState<number | null>(null);
    const [categoryName, setCategoryName] = useState<string>("");
    const [isLock, setIsLock] = useState<boolean>(false);

    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {props.repertoires.map((repertoire, idx) => (
                <li className="me-2">
                    {
                        (idxEdit === idx) ? (
                            <input type="text" value={categoryName} className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" onChange={(e) => setCategoryName(e.target.value)} onDoubleClick={() => { setIdxEdit(null) }} ref={(e) => e?.focus()} />
                        ) :
                            (
                                <a aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" onClick={() => { (isAddMode === false && idxEdit === null) ? props.onClickCategory(idx) : null }} onDoubleClick={() => { setIsAddMode(false); setCategoryName(repertoire.categoryName); setIdxEdit(idx) }}>{repertoire.categoryName}</a>
                            )
                    }
                </li>
            ))}
            <li className="me-2">
                {
                    (isAddMode) ? (
                        <input type="text" value={categoryName} className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" onChange={(e) => setCategoryName(e.target.value)} onDoubleClick={() => { setIsAddMode(false) }} ref={(e) => e?.focus()} />
                    ) :
                        (
                            <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500" onClick={() => { setIdxEdit(null); setCategoryName(""); setIsAddMode(true) }}>追加</a>
                        )
                }
            </li>
        </ul>
    );
}
