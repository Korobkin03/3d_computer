export type NavLinksType = {
  id: string;
  title: string;
};

export type ServicesType = {
  title: string;
  icon: string;
};

export type TechnologiesType = {
  name: string;
  icon: string;
};

export type ExperiencesType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TestimonialsType = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index: number;
};

export type TagsType = {
  name: string;
  color: string;
};

export type ProjectsType = {
  name: string;
  description: string;
  tags: TagsType[];
  image: string;
  source_code_link: string;
  index: number;
};

export type FormType = {
  name: string;
  email: string;
  message: string;
};

export type StarsRefType = {
  rotation: {
    x: number;
    y: number;
  };
};

export type OptionsType = {
  max: number;
  scale: number;
  speed: number;
};

export type BallType = {
  imgUrl: string;
};
