import { Icon } from "@iconify/react";
import { useState } from "react";

type FilterProps = {
  filters: { colours: string; types: string[]; price_range: string[] };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      colours: string;
      types: string[];
      price_range: string[];
    }>
  >;
  handleApplyFilter: () => void;
  handleReset: () => void;
};

const Filter = ({
  filters,
  setFilter,
  handleApplyFilter,
  handleReset,
}: FilterProps) => {
  const [filterTypeList, setFilterType] = useState([
    {
      title: "Series",
      bg: "pinky",
      lightBg: "pinky-light",
      items: [
        {
          label: "Breaking Bad",
          selected: false,
        },
        {
          label: "Stranger Things",
          selected: false,
        },
        {
          label: "Game of Thrones",
          selected: false,
        },
        {
          label: "The Boys",
          selected: false,
        },
      ],
    },
    {
      title: "Movies",
      bg: "[#603EFF]",
      lightBg: "[#E5E0FC]",
      items: [
        {
          label: "Marvel",
          selected: false,
        },
        {
          label: "DC",
          selected: false,
        },
        {
          label: "Star Wars",
          selected: false,
        },
        {
          label: "Incredibles",
          selected: false,
        },
      ],
    },
    {
      title: "Anime",
      bg: "pinky",
      lightBg: "pinky-light",
      items: [
        { label: "Death Note", selected: false },
        { label: "Fullmetal Alchemist", selected: false },
        { label: "Naruto", selected: false },
        { label: "Attack on Titan", selected: false },
      ],
    },
  ]);

  return (
    <div className="pt-16">
      {filterTypeList.map((filterType, index) => (
        <div key={index}>
          <p className="text-bluey text-2xl underline font-bold py-4">
            {filterType.title}
          </p>
          {filterType.items.map((item, indexS) => (
            <div key={indexS} className="flex gap-4 items-center py-2">
              <div
                className={`border border-${
                  filterType.lightBg
                } flex items-center justify-center w-5 h-5 bg-${
                  item.selected && filterType.lightBg
                }`}
                onClick={() => {
                  const newFilterTypeList = [...filterTypeList];
                  newFilterTypeList[index].items[indexS].selected =
                    !newFilterTypeList[index].items[indexS].selected;
                  if (newFilterTypeList[index].items[indexS].selected) {
                    setFilter({
                      ...filters,
                      types: [
                        ...filters.types,
                        newFilterTypeList[index].items[indexS].label,
                      ],
                    });
                  }
                  setFilterType(newFilterTypeList);
                }}
              >
                {item.selected && (
                  <Icon
                    icon="mingcute:check-fill"
                    className={`text-${filterType.bg} text-sm hover:cursor-pointer`}
                  />
                )}
              </div>
              <p className="text-secondary font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      ))}
      <div>
        <Icon icon={"mdi:color"} />
        <input
          placeholder="Colour"
          className="border outline-none rounded-md  px-2"
        />
        <div>

        <span>Min</span>
        <input
          type="range"
          value={filters.price_range[1]}
          onChange={(e) =>
            setFilter({
              ...filters,
              price_range: [e.target.value, ...filters.price_range],
            })
          }
          maxLength={1000}
          placeholder="Price"
          className="border outline-none rounded-md  px-2"
        />
        <span>{parseInt(filters.price_range[1]) * 5}</span>
        </div>
        <div className="py-2">  
        <button
          onClick={handleApplyFilter}
          className="px-4 bg-black text-white mx-3"
        >
          Apply Filter
        </button>
        </div>
        <button onClick={handleReset} className="px-4 bg-black text-white mx-3">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
