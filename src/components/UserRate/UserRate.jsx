import Image from "next/image";
import userProf from "@/public/assets/userProf.png";
import StarIcon from "@mui/icons-material/Star";

export default function UserRate() {
  return (
    <div className="bg-white p-7 shadow-md flex mx-8 flex-row items-center">
      <div>
        <Image
          src={userProf}
          alt="Foto del usuario"
          width={100}
          height={100}
          className="user-photo"
        />
      </div>

      <div className="ml-4">
        <div className="text-black">Nombre del Usuario</div>

        <div className="text-black text-sm">
          Opinión del usuario sobre el servicio de la página
        </div>
        <div className="text-[#FFD700] space-x-2">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} className="star-icon" />
          ))}
        </div>
      </div>
    </div>
  );
}