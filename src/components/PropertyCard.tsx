import Property from "../types/property";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaGasPumpSolid } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { BiTachometer } from "react-icons/bi";
import { RiSteering2Line } from "react-icons/ri";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <li className="rounded-2xl p-3 shadow-[2px_4px_9px_1px_#00000024]">
      {/* Image */}
      <span className="block h-[240px] w-[350px] overflow-hidden rounded-2xl">
        <img
          className="w-full scale-125"
          src={property.imageURL}
          alt={"image of " + property.name}
        />
      </span>

      {/* Details */}
      <div className="px-2 pt-4">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="font-saira text-2xl">{property.name}</h3>
          <p className="rounded-xl border-[2px] border-dashed border-primary/50 px-[10px] py-[1px]">
            {property.area}
          </p>
        </div>
        {/* Specifications */}
        <div className="font-saira grid grid-cols-2 gap-2 pt-4">
          <p className="flex items-center gap-1">
            <LuUsers2 className="h-5 w-5 !text-primary" />
            {property.beds} People
          </p>
          <p className="flex items-center gap-1">
            <LiaGasPumpSolid className="h-5 w-5 !text-primary" />{" "}
            {property.price}
          </p>
          <p className="flex items-center gap-1">
            <BiTachometer className="h-5 w-5 !text-primary" />
            {property.bathroom}
          </p>
          <p className="flex items-center gap-1">
            <RiSteering2Line className="h-5 w-5 !text-primary" />
            {property.beds}
          </p>
        </div>
        {/* Rent */}
        <div className="mt-4 flex items-center justify-between border-t-2 pt-4">
          <div className="font-saira text-2xl">
            ${property.price} <span className="text-base">/ month</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <button className="flex items-center">
              <AiOutlineHeart className="block h-9 w-9 rounded-lg bg-[#dbecfb] p-[6px] !text-primary/60  " />
            </button>
            <button className="rounded-xl bg-primary px-4 py-2 text-sm tracking-tight text-white">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
