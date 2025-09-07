export interface NavTypes {
  id: number;
  title: string;
  linkTo: string;
}

export interface HeadingTypes {
  subtitle?: string;
  title: string;
  titleColor: "blue" | "white";
}

export interface ButttonTypes {
  text: string;
  onClick?: () => {};
  className?: string;
}

export interface ServiceCardProps {
  id: number;
  image: string;
  title: string;
}
