
export interface IEvent{
    id: number;
    title: string;
    date: string;
    image: null;
    image_url: any;
    body: null | string;
  }

  export interface IAddEvent{
    title:string;
    image:File | null;
    body:string;
  }