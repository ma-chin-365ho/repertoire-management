
// NOTE:連想配列だと順序保証されないから、配列にしておく
import { TypeRepertoire } from "./app/types/typeRepertoire";

export const repertoires: TypeRepertoire[] = [
    {
        categoryName: "エレキ",
        songs: [
            {
                title: "ロビンソン",
                sections: [
                    {
                        sectionName: "イントロ",
                        key: null,
                        tempo: null,
                        myTempo: null,
                        rhythmPattern: null,
                        chordProgressions: "1625",
                    },
                    {
                        sectionName: "Aメロ",
                        key: null,
                        tempo: null,
                        myTempo: null,
                        rhythmPattern: null,
                        chordProgressions: "1625",
                    },
                    {
                        sectionName: "サビ",
                        key: "B",
                        tempo: 140,
                        myTempo: null,
                        rhythmPattern: "16ビート",
                        chordProgressions: "1625",
                    },
                ],
                default: {
                    key: "A",
                    tempo: 120,
                    myTempo: 120,
                    rhythmPattern: "shuffle",
                    chordProgressions: "1625",
                }
            },
            {
                title: "テレキャスター・ストライプ",
                sections: [
                    {
                        sectionName: "イントロ",
                        key: null,
                        tempo: null,
                        myTempo: null,
                        rhythmPattern: null,
                        chordProgressions: "1625",
                    },
                ],
                default: {
                    key: "A",
                    tempo: 120,
                    myTempo: 222,
                    rhythmPattern: "shuffle",
                    chordProgressions: "1625",
                }
            }
        ]
    },
    {
        categoryName: "弾き語り",
        songs: [
            {
                title: "終わりなき旅",
                sections: [
                    {
                        sectionName: "イントロ",
                        key: null,
                        tempo: null,
                        myTempo: null,
                        rhythmPattern: null,
                        chordProgressions: "1625",
                    },
                ],
                default: {
                    key: "A",
                    tempo: 120,
                    myTempo: 11,
                    rhythmPattern: "shuffle",
                    chordProgressions: "1625",
                }
            }
        ]
    },
]