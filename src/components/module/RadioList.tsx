

function RadioList({ profileData, setProfileData }:any) {
  const { category } = profileData;

  const changeHandler = (e:any) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="mb-10">
      <p className="mb-1 text-lg">دسته بندی</p>
      <div className="flex">
        <div className="flex items-center justify-evenly ml-8 w-16 my-1 mx-1.5 cursor-pointer rounded-[5px] bg-[#304ffe18] text-[#304ffe]">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly ml-8 w-16 my-1 mx-1.5 cursor-pointer rounded-[5px] bg-[#304ffe18] text-[#304ffe]">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly ml-8 w-16 my-1 mx-1.5 cursor-pointer rounded-[5px] bg-[#304ffe18] text-[#304ffe]">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center justify-evenly ml-8 w-16 my-1 mx-1.5 cursor-pointer rounded-[5px] bg-[#304ffe18] text-[#304ffe]">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
