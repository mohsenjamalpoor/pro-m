import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}:any) {
  const changeHandler = (e:any) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div>
      <p className="text-lg mb-1.5">{title}</p>
      {textarea ? (
        <textarea className="h-25 mb-10 w-80 rounded-[5px] p-2.5 text-base border border-dashed border-[#304ffe] text-gray-400 focus:outline-none"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input className="h-10 mb-10 w-80 rounded-[5px] p-2.5 text-base border-1-dashed border-[#304ffe] text-gray-400 focus:outline-none border-1-solid-[#304ffe]"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
