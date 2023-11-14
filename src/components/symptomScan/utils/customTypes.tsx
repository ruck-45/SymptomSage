export type directory = {
    name : string,
    path : string
}[];

export type symptom = {
  Name: string;
  Symptoms: {
    Name: string;
    ID: number;
  }[];
}[];

export type symptomsid = {
  [key: number]: boolean;
};

export type iconType = {
  [key: number]: JSX.Element;
};

export type symptomData = {
  ID: number;
  Name: string;
  HasRedFlag: boolean;
  HealthSymptomLocationIDs: number[];
  ProfName: string;
  Synonyms: string[];
}[];