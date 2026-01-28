interface ProfilProps {
  name: string;
  description: string;
  image: string;
}

export function ProfilComponents({ name, description, image }: ProfilProps) {
  return (
    <section>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt={name} />
      </div>
    </section>
  );
}
