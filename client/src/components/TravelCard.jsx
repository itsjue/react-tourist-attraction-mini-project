import React from "react";

export const TravelCard = (props) => {
  const { title, eid, url, description, tags, photos = [] } = props;

  return (
    <div className="flex gap-3 py-[10px] px-[26px] mt-15">
      <img
        src={photos[0]}
        alt={title}
        className="w-[233px] h-[163px] rounded-[21px]"
      />

      <div className="flex flex-col gap-1 ml-[21px]">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-bold flex">{title}</h2>
        </a>
        <p className="text-gray-500">
          {description && description.length > 100
            ? description.slice(0, 100) + "..."
            : description}{" "}
            <br />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline underline-offset-1"
          >
            อ่านต่อ
          </a>
        </p>
        <p className="flex">
          หมวด
          &nbsp;<span className="text-gray-500 flex gap-2 underline">
            {tags.map((tag, index) => (
              <a href="#" key={index}>{tag}</a>
            ))}
          </span>
        </p>

        <div className="flex gap-[17px] mt-[6px]">
          {photos.slice(1).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`photo-${index}`}
              className="w-[67px] h-[66px] rounded-[6.5px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
