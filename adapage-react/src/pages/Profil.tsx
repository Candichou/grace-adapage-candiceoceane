import { ProfilComponents } from "../components/ProfilComponents";
import { profil } from "../data/profil";

function Profil() {
  return (
    <div className="flex">
      <div className=" flex flex-col ">
        <ProfilComponents
          name={profil.name}
          description={profil.description}
          image={profil.image}
        />
      </div>
    </div>
  );
}
export default Profil;
