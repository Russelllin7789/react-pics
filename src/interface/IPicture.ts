interface IPicture {
  alt: string;
  avg_color: string;
  height: number;
  width: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  src: {
    landscape: string;
  };
  url: string;
}

export default IPicture;
