import { TypeRepertoireSection, TypeRepertoireSectionDefault } from "./types/typeRepertoire";

export default function RepertoireSection(props: { repertoireSection: TypeRepertoireSection, repertoireSectionDefault: TypeRepertoireSectionDefault }) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{props.repertoireSection.key !== null ? props.repertoireSection.key : props.repertoireSectionDefault.key}</dt>
                            <dd className="text-gray-500 dark:text-gray-400">Key</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold">{props.repertoireSection.chordProgressions !== null ? props.repertoireSection.chordProgressions : props.repertoireSectionDefault.chordProgressions}</dt>
                            <dd className="text-gray-500 dark:text-gray-400">chordProgressions</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
