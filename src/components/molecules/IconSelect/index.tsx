"use client";
import { Tooltip } from "react-tooltip";
import { IoFootstepsSharp } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
import {
  GiHomeGarage,
  GiSofa,
  GiParkBench,
  GiBrickWall,
  GiLaddersPlatform,
} from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { MdKitchen, MdTableRestaurant } from "react-icons/md";

export default function IconSelect(props: { options: string[] }) {
  const getIcon = (option: string) => {
    switch (option) {
      case "Lantai":
        return <IoFootstepsSharp />;
      case "Dinding":
        return <GiBrickWall />;
      case "Teras":
        return <GiParkBench />;
      case "Kolam Renang":
        return <TbSwimming />;
      case "Kamar Mandi":
        return <FaBath />;
      case "Dapur":
        return <MdKitchen />;
      case "Dalam Rumah":
        return <GiSofa />;
      case "Garasi":
        return <GiHomeGarage />;
      case "Meja Dapur":
        return <MdTableRestaurant />;
      case "Tangga":
        return <GiLaddersPlatform />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-4">
      {props.options.map((option) => (
        <div
          key={option}
          className={`${
            props.options.includes(option)
              ? "text-indigo-400 border rounded-full border-indigo-400"
              : "text-gray-400"
          } text-lg md:text-2xl cursor-pointer transition duration-300 p-1`}
          title={option}
          data-tooltip-id="tooltip"
          data-tooltip-content={option}
        >
          {getIcon(option)}
        </div>
      ))}
      <Tooltip id="tooltip" />
    </div>
  );
}
