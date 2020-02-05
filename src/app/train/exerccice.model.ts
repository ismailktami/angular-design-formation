

export interface Exercice {
 id: string;
 name: string;
 pathImage: string;
 description: string;
 duration: number;
 calories: number;
 date?: Date;
 state?: 'completed' | 'cancalled' |null ;
}
