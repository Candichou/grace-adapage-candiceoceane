import { profil } from "../data/profil";

function Profil() {
  return (
    <div className="flex font-poppins">
      <h1>{profil.name}</h1>
      <img src={profil.image} alt="portrait elips" />
      <p>{profil.description}</p>
    </div>
  );
}
export default Profil;
