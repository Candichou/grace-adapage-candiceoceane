import { ProfilComponents } from "../components/ProfilComponents";
import { Carousel } from "../components/Carousel";
import { profil } from "../data/profil";

export default function Profil() {
  return (
    <section className="min-h-screen bg-card py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ProfilComponents
          name={profil.name}
          description={profil.description}
          image={profil.image}
        />

        <div className="flex flex-col items-center pt-20">
          <Carousel images={profil.images} name={profil.name} />
        </div>
      </div>
    </section>
  );
}
