export type Project = {
  id: number;
  title: string;
  price: number;
};

export default function Project({ id, title, price }: Project) {
  return (
    <>
      <p>{id}</p>
      <p>{title}</p>;<p>{price}</p>;
    </>
  );
}
