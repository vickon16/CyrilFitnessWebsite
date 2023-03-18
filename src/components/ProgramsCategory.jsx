import {BsArrowRightCircleFill} from "react-icons/bs"

const ProgramsCategory = ({heading, details, image}) => {
  return (
    <article className="category max-w-[300px] flex flex-col flex-wrap bg-grayColor hover:bg-opacity-80 cursor-pointer p-8 gap-6 text-white justify-between">
      {image("w-10 h-10 fill-secondaryColor")}
      <span className="text-xl font-bold">{heading}</span>
      <span className="text-base leading-relaxed">{details}</span>
      <div className="flex items-center gap-6 cursor-pointer border-2 w-fit py-2 px-3">
        <button>Join Now</button>
        <BsArrowRightCircleFill className="text-2xl" />
      </div>
    </article>
  );
}

export default ProgramsCategory