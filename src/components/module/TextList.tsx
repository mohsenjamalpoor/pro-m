import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


function TextList({ title, profileData, setProfileData, type }:any) {
  const changeHandler = ({e, index}:any) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index:any) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-10">
      <p className="mb-1.5 text-lg">{title}</p>
      {profileData[type].map(({i, index}:any) => (
        <div className="flex mx-0 my-2.5" key={index}>
          <input className=" ml-2.5 text-[#8f8e8e] rounded-[5px] w-80 h-8 text-base p-2.5 border border-dashed border-[#304ffe] focus:border-solid outline-none"
            type="text"
            value={i}
            onChange={(e) => changeHandler({e, index})}
          />
          <button className="flex items-center leading-2 m-0 text-[#db0505] bg-white border border-solid border-[#db0505]" onClick={() => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button className="rounded-[5px] text-white bg-[#304ffe] border-none text-base cursor-pointer flex py-1 px-2 mt-5 transition-all ease-in delay-100 hover:scale-105 " onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd className="mr-1.5 text-lg"/>
      </button>
    </div>
  );
}

export default TextList;
