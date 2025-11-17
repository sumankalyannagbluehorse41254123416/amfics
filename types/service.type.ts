export interface Subsection {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  [key: string]: unknown;
}

export interface Section {
  id: number;
  title: string;
  shortDescription: string;
  subsections: Subsection[];
  [key: string]: unknown;
}

export interface EditReview {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  subsections: Subsection[];
  [key: string]: unknown;
}

export interface PageDataType {
  status: boolean;
  pagedata: {
    id: number | string;
    title: string;
    slug: string;
    uuid: string;
    description: string;
    cover_image_url: string;
    image: string;
    status: string;
    [key: string]: unknown;
  };
  pageItemdataWithSubsection: Section[];
  editReviedata: EditReview[];
}
