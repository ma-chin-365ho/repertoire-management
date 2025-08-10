export type TypeKeyName = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "A#";
export type TypeRhythmPattern = "16ビート" | "shuffle";

export type TypeRepertoire = {
    categoryName: string;
    songs: TypeRepertoireSong[];
}

export type TypeRepertoireSong = {
    title: string;
    sections: TypeRepertoireSection[];
    default: TypeRepertoireSectionDefault;
}

export type TypeRepertoireSection = {
    sectionName: string,
    key: TypeKeyName | null,
    tempo: number | null,
    myTempo: number | null,
    rhythmPattern: TypeRhythmPattern | null,
    chordProgressions: string | null,
}

export type TypeRepertoireSectionDefault = {
    key: TypeKeyName,
    tempo: number,
    myTempo: number,
    rhythmPattern: TypeRhythmPattern,
    chordProgressions: string,
}