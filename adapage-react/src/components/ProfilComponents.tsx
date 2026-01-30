interface ProfilProps {
  name: string;
  description: string;
  image: string;
}

export function ProfilComponents({ name, description, image }: ProfilProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-elips-orange to-elips-gold rounded-full blur-2xl opacity-30"></div>
        <img
          src={image}
          alt={name}
          className="relative w-72 h-72 object-cover rounded-full border-4 border-elips-orange shadow-2xl"
        />
      </div>

      {/* Texte */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl font-bold text-elips-orange mb-4">{name}</h1>
        <div className="w-20 h-1 bg-linear-to-r from-elips-orange to-elips-gold mb-6 mx-auto md:mx-0"></div>
        <p className=" text-justify text-base text-elips-black/80 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
