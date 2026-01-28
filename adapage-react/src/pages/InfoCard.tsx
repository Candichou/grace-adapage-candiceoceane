import { InfoCardComponents } from "../components/InfoCardComponents";
import { profil } from "../data/profil";
import type { InfoCard } from "../Types/data";

function InfoCard() {
  return (
    <section>
      <div>
        {profil.infoCard.map((info: InfoCard, index: number) => (
          <InfoCardComponents key={index} infocard={info} />
        ))}
      </div>
    </section>
  );
}

export default InfoCard;
