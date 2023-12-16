export default interface Book {
    id: number;
    title: string;
    author?: string;
    genre?: string;
    published?: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }