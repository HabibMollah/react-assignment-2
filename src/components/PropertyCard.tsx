import Property from "../types/property";
import { AiOutlineHeart } from "react-icons/ai";
import {
  LiaArrowsAltSolid,
  LiaBathSolid,
  LiaBedSolid,
  LiaMapMarkerSolid,
} from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <li className="rounded-2xl bg-white p-2">
      {/* Image */}
      <span className="relative mx-auto block h-[240px] w-[360px] overflow-hidden rounded-2xl !text-primary">
        <div className="absolute z-10 flex w-full items-center justify-between p-3">
          <span className="z-10 rounded-full bg-white px-3 py-[6px] font-medium">
            For Rent
          </span>
          <span className="z-10 flex items-center justify-center rounded-full bg-white p-2">
            <AiOutlineHeart className="h-5 w-5" />
          </span>
        </div>
        <img
          className="w-full scale-125"
          src={property.imageURL}
          alt={"image of " + property.name}
        />
      </span>

      {/* Details */}
      <div className="px-4 pt-4">
        {/* Title */}
        <div className="">
          <p className="flex items-center gap-1 py-3 font-semibold text-gray-500">
            <LiaMapMarkerSolid className="h-5 w-5 !text-[#9c814f]" />
            {property.location}
          </p>
          <h3 className="min-h-[3.6rem] text-xl font-bold text-gray-700">
            {property.name}
          </h3>
        </div>
        {/* Specifications */}
        <div className="flex items-center justify-center gap-4 pt-4 font-medium !text-gray-500">
          <p className="flex flex-col gap-1">
            <HiOutlineBuildingOffice2 className="h-5 w-5" />
            {property.rooms} Room
          </p>
          <p className="flex flex-col gap-1 border-l border-dashed pl-4">
            <LiaBedSolid className="h-5 w-5" /> {property.beds} Bed
          </p>
          <p className="flex flex-col gap-1 border-l border-dashed pl-4">
            <LiaBathSolid className="h-5 w-5" />
            {property.bathroom} Bath
          </p>
          <p className="flex flex-col gap-1 border-l border-dashed pl-4">
            <LiaArrowsAltSolid className="h-5 w-5" />
            {property.area} sft
          </p>
        </div>
        {/* Rent */}
        <div className="mt-4 flex items-center justify-between border-t border-dashed pb-2 pt-4">
          <div className="text-xl font-medium">
            <span className="font-semibold text-primary">
              ${property.price}
            </span>{" "}
            <span className="text-base">/ month</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-3xl border border-primary px-4 py-2 text-sm font-bold tracking-tight text-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
