import { profil } from "../data/profil";

function Portrait() {
  return (
    <div>
      <h1>Elips</h1>
      <img src={profil.image} alt="portrait elips" />
    </div>
  );
}
export default Portrait;
